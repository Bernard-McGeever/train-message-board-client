import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../core/services/shared/shared.service";
import {Subject, Subscription} from "rxjs";
import {Service} from "../../models/Service";
import {HuxleyTwoService} from "../../service/huxley-two/huxley-two.service";
import {TrainService} from "../../models/TrainService";

@Component({
  selector: 'app-more-service-information',
  templateUrl: './more-service-information.component.html',
  styleUrls: ['./more-service-information.component.scss']
})
export class MoreServiceInformationComponent implements OnInit {

  public trainService: TrainService | null = null;

  private serviceIdUrlSafeSubscription: Subscription;

  constructor(private shared: SharedService, private huxleyTwoService: HuxleyTwoService) {
    this.serviceIdUrlSafeSubscription = shared.subscribeToServiceIdUrlSafeSubject((url: string) => {
      this.initTrainService(url);
    });
  }

  ngOnInit(): void { }

  public initTrainService(url: string) {
    this.trainService = this.huxleyTwoService.getService(url);
  }

  public getTrainServiceString(service: TrainService): string {
    return JSON.stringify(service);
  }
}
