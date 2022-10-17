import { Component, OnDestroy, OnInit } from "@angular/core";
import { TrainServiceWrapper } from "./model/train-service-wrapper";
import { StationNameMap } from "../../models/CRS";
import { Subscription } from "rxjs";
import { ApplicationSettingsService } from "../../core/services/application-settings/application-settings.service";
import { HuxleyTwoService } from "../../service/huxley-two/huxley-two.service";
import { Service } from "../../models/Service";
import { SharedService } from "../../core/services/shared/shared.service";

@Component(
  {
    template: ''
  })
export abstract class BaseTableComponent implements OnInit, OnDestroy {

  public currentServices: TrainServiceWrapper[] | undefined = undefined;

  private crs: StationNameMap | null = null;
  private subscriptions: Subscription[] = [];

  protected constructor(public settings: ApplicationSettingsService, public shared: SharedService, public huxleyTwoService: HuxleyTwoService) { }

  ngOnInit(): void {
    this.crs = this.settings.currentCRS;
    this.subscriptions.push(this.settings.subscribeToCRS((crs: StationNameMap) => {
      this.crs = crs;
      this.populateCurrentServices(this.crs);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public setIsServiceInformationShown(service: TrainServiceWrapper) {
    this.currentServices?.forEach(service => service.moreInfoShown = false);
    service.moreInfoShown = !service.moreInfoShown;
  }

  public onServiceDbClicked(service: TrainServiceWrapper) {
    this.shared.setService(service.serviceIdUrlSafe);
  }

  abstract populateCurrentServices(crs: StationNameMap): void;

  public static convertTrainServiceToWrapper(service: Service): TrainServiceWrapper {
    return new TrainServiceWrapper(
      service.delayReason,
      service.destination,
      service.eta,
      service.etd,
      service.isCancelled,
      service.operatorCode,
      service.origin,
      service.platform,
      service.serviceIdUrlSafe,
      service.sta,
      service.std,
      false);
  }
}

