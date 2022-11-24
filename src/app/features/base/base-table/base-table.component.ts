import { Component, OnDestroy, OnInit } from "@angular/core";
import { TrainServiceWrapper } from "../model/train-service-wrapper";
import { Subscription } from "rxjs";
import { ApplicationSettingsService } from "../../../core/services/application-settings/application-settings.service";
import { HuxleyTwoService } from "../../../service/huxley-two/huxley-two.service";
import { SharedService } from "../../../core/services/shared/shared.service";
import {CRS} from "../../../core/services/gateway/CrsApi/crs-api.service";
import {IService} from "../../../core/services/gateway/DeparturesAndArrivalsApi/departures-and-arrivals-api";

@Component(
  {
    template: './base-table.component.html',
    styleUrls: ['./base-table.component.scss']
  })
export abstract class BaseTableComponent implements OnInit, OnDestroy {
  public properties?: (keyof TrainServiceWrapper)[];

  public crs: CRS | null = null;

  public currentServices?: TrainServiceWrapper[];
  public filteredServices?: TrainServiceWrapper[] = [];

  public searchTerm: string;

  protected subscriptions: Subscription[] = [];

  protected constructor(public settings: ApplicationSettingsService, public shared: SharedService, public huxleyTwoService: HuxleyTwoService) { }

  ngOnInit(): void {
    this.populateProperties();

    this.crs = this.settings.currentCRS;
    this.subscriptions.push(this.settings.subscribeToCRS((crs: CRS) => {
      this.crs = crs;
      this.populateCurrentServices(this.crs);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public setIsServiceInformationShown(service: TrainServiceWrapper) {
    this.filteredServices?.forEach(service => service.moreInfoShown = false);
    service.moreInfoShown = !service.moreInfoShown;
  }

  public onServiceDbClicked(service: TrainServiceWrapper) {
    this.shared.setService(service.serviceIdUrlSafe);
  }

  public static convertTrainServiceToWrapper(service: IService): TrainServiceWrapper {
    return new TrainServiceWrapper(
      service.delayReason,
      service.destination[0].locationName,
      service.eta,
      service.etd,
      service.isCancelled,
      service.operatorCode,
      service.origin[0].locationName,
      service.platform,
      service.serviceIdUrlSafe,
      service.sta,
      service.std,
      false);
  }

  populateSearchTerm(term: string) {
    this.searchTerm = term;
    this.getSearchInfo();
    this.populateCurrentServices(this.crs);
  }

  getSearchInfo() {
    return `Filtered results by serch term ${this.searchTerm}.`;
  }

  abstract populateCurrentServices(crs: CRS): void;

  abstract populateProperties(): void;
}

