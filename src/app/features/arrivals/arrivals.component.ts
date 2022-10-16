import {Component, OnDestroy, OnInit} from '@angular/core';
import {HuxleyTwoGetResponse} from "../../models/HuxleyTwoGetResponse";
import {StationNameMap} from "../../models/CRS";
import {Subscription} from "rxjs";
import {ApplicationSettingsService} from "../../service/application/application-settings.service";
import {HuxleyTwoService} from "../../service/huxley-two/huxley-two.service";

@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.scss']
})
export class ArrivalsComponent implements OnInit, OnDestroy {

  public currentArrivals: HuxleyTwoGetResponse | null = null;

  private crs: StationNameMap | null = null;
  private subscriptions: Subscription[] = [];

  constructor(private settings: ApplicationSettingsService, private huxleyTwoService: HuxleyTwoService) { }

  ngOnInit(): void {
    this.crs = this.settings.currentCRS;
    this.subscriptions.push(this.settings.subscribeToCRS((crs: StationNameMap) => {
      this.crs = crs;
      this.populateCurrentArrivals(this.crs);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private populateCurrentArrivals(crs: StationNameMap) {
    this.currentArrivals = this.huxleyTwoService.getArrivals(crs);
  }
}
