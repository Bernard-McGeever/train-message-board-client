import {Component, OnDestroy, OnInit} from '@angular/core';
import { HuxleyTwoGetResponse } from "../../models/HuxleyTwoGetResponse";
import { MOCK_DEPARTURES_AND_ARRIVALS_BHM } from "../../mocks/mock-departures-and-arrivals-responces";
import {ApplicationSettingsService} from "../../service/application/application-settings.service";
import {HuxleyTwoService} from "../../service/huxley-two/huxley-two.service";
import {StationNameMap} from "../../models/CRS";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-departures-and-arrivals',
  templateUrl: './departures-and-arrivals.component.html',
  styleUrls: ['./departures-and-arrivals.component.scss']
})
export class DeparturesAndArrivalsComponent implements OnInit, OnDestroy {

  public currentDeparturesAndArrivals: HuxleyTwoGetResponse | null = null;

  private crs: StationNameMap | null = null;
  private subscriptions: Subscription[] = [];

  constructor(private settings: ApplicationSettingsService, private huxleyTwoService: HuxleyTwoService) { }

  ngOnInit(): void {
    this.crs = this.settings.currentCRS;
    this.subscriptions.push(this.settings.subscribeToCRS((crs: StationNameMap) => {
      this.crs = crs;
      this.populateCurrentDeparturesAndArrivals(this.crs);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private populateCurrentDeparturesAndArrivals(crs: StationNameMap) {
    this.currentDeparturesAndArrivals = this.huxleyTwoService.getDeparturesAndArrivals(crs);
  }
}
