import {Component, Input, OnInit} from '@angular/core';
import {TrainServiceWrapper} from "../base/model/train-service-wrapper";
import {HuxleyTwoService} from "../../service/huxley-two/huxley-two.service";
import {TrainService} from "../../core/services/gateway/ServicesApi/services-api.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-future-station-scroll',
  templateUrl: './future-station-scroll.component.html',
  styleUrls: ['./future-station-scroll.component.scss']
})
export class FutureStationScrollComponent implements OnInit {

  @Input() public serviceWrapper: TrainServiceWrapper | null = null;

  public service: TrainService | null = null;

  private subscriptions: Subscription[] = [];

  constructor(private huxleyTwoService: HuxleyTwoService) { }

  ngOnInit(): void {
    const serviceIdUrlSafe = this.serviceWrapper?.serviceIdUrlSafe;
    if (serviceIdUrlSafe) {
      this.populateService(serviceIdUrlSafe);
    }
  }

  public getMoreInformationString() {
    if (this.service != null) {
      return `Calling at ${FutureStationScrollComponent.getServiceStops(this.service)}. This train is formed of
      ${this.service.formation?.coaches?.length || ''} coaches`
    } else {
      return 'Apologies. No Information.'
    }
  }

  private populateService(url: string): void {
    this.subscriptions.push(this.huxleyTwoService.getService(url).subscribe((service: TrainService) => {
      this.service = service;
    }));
  }

  private static getServiceStops(service: TrainService): string {
    let callingPointsLocName: string[] = [];
    service.subsequentCallingPoints?.forEach(subCallingPoint => {
      subCallingPoint.callingPoint.forEach(cPoint => {
        callingPointsLocName.push(cPoint.locationName);
      });
    });
    return callingPointsLocName.join(", ");
  }
}
