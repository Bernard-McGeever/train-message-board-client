import {Component, Input, OnInit} from '@angular/core';
import {TrainServiceWrapper} from "../base/model/train-service-wrapper";
import {TrainService} from "../../models/TrainService";
import {HuxleyTwoService} from "../../service/huxley-two/huxley-two.service";

@Component({
  selector: 'app-future-station-scroll',
  templateUrl: './future-station-scroll.component.html',
  styleUrls: ['./future-station-scroll.component.scss']
})
export class FutureStationScrollComponent implements OnInit {

  @Input() public serviceWrapper: TrainServiceWrapper | null = null;

  public service: TrainService | null = null;

  constructor(private huxleyTwoService: HuxleyTwoService) { }

  ngOnInit(): void {
    const serviceIdUrlSafe = this.serviceWrapper?.serviceIdUrlSafe;
    if (serviceIdUrlSafe) {
      this.populateService(serviceIdUrlSafe);
    }
  }

  public getMoreInformationString() {
    if (this.service) {
      return `Calling at ${FutureStationScrollComponent.getServiceStops(this.service)}. This train is formed of
      ${FutureStationScrollComponent.getNumberOfCoaches(this.service)} coaches`
    } else {
      return 'Apologies. No Information.'
    }
  }

  private populateService(serviceIdUrlSafe: string): void {
    this.service = this.huxleyTwoService.getService(serviceIdUrlSafe);
  }

  private static getServiceStops(service: TrainService): string {
    let callingPointsLocName: string[] = [];
    service.subsequentCallingPoints.forEach(subCallingPoint => {
      subCallingPoint.callingPoint.forEach(cPoint => {
        callingPointsLocName.push(cPoint.locationName);
      });
    });
    return callingPointsLocName.join(", ");
  }

  private static getNumberOfCoaches(service: TrainService): number {
    return service.formation.coaches.length;
  }
}
