import {Component, OnDestroy, OnInit} from '@angular/core';
import {HuxleyTwoGetResponse} from "../../models/HuxleyTwoGetResponse";
import {ApplicationSettingsService} from "../../service/application/application-settings.service";
import {HuxleyTwoService} from "../../service/huxley-two/huxley-two.service";
import {CRS, StationNameMap} from "../../models/CRS";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.scss']
})
export class DeparturesComponent implements OnInit, OnDestroy {

  public currentDepartures: HuxleyTwoGetResponse | null = null;

  private crs: StationNameMap | null = null;
  private subscriptions: Subscription[] = [];

  constructor(private settings: ApplicationSettingsService, private huxleyTwoService: HuxleyTwoService) { }

  ngOnInit(): void {
    this.crs = this.settings.currentCRS;
    this.subscriptions.push(this.settings.subscribeToCRS((crs: StationNameMap) => {
      this.crs = crs;
      this.populateCurrentDepartures(this.crs);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private populateCurrentDepartures(crs: StationNameMap) {
    this.currentDepartures = this.huxleyTwoService.getDepartures(crs);
  }
}
