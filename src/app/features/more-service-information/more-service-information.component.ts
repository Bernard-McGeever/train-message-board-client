import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../core/services/shared/shared.service";
import {Subscription} from "rxjs";
import {HuxleyTwoService} from "../../service/huxley-two/huxley-two.service";
import {TrainService} from "../../core/services/gateway/ServicesApi/services-api.service";

@Component({
  selector: 'app-more-service-information',
  templateUrl: './more-service-information.component.html',
  styleUrls: ['./more-service-information.component.scss']
})
export class MoreServiceInformationComponent implements OnInit {

  public trainService?: TrainService;
  public headings?: string[];
  public data?: any[];

  private serviceIdUrlSafeSubscription: Subscription;
  private subscriptions: Subscription[] = [];

  constructor(private shared: SharedService, private huxleyTwoService: HuxleyTwoService) {
    this.headings = MoreServiceInformationComponent.populateHeadings();
  }

  ngOnInit(): void {
    this.serviceIdUrlSafeSubscription = this.shared.subscribeToServiceIdUrlSafeSubject((url: string) => {

      this.initTrainService(url);
    });
  }

  private static populateHeadings(): string[] {
    return ["Generated at", "Service type", "Location name", "CRS", "Operator", "RSID", "Is cancelled", "Cancel reason", "Delay reason",
      "Overdue message", "Length", "Detach front", "Is reverse formation", "Platform", "STA", "ETA", "ATA", "STD", "ETD", "STD"];
  }

  public initTrainService(url: string) {
    this.subscriptions.push(this.huxleyTwoService.getService(url).subscribe((trainService: TrainService) => {
      this.trainService = trainService;
      this.populateData(this.trainService);
    }));
  }

  public populateData(service: TrainService | undefined) {
    if (service) {
      this.data = [service.generatedAt, service.serviceType, service.locationName, service.crs, service.operator, service.rsid, service.isCancelled,
        service.cancelReason, service.delayReason, service.overdueMessage, service.length, service.detachFront, service.isReverseFormation,
        service.platform, service.sta, service.eta, service.ata, service.std, service.etd, service.std];
    }
  }

  public removeTrainService() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.trainService = undefined;
  }
}
