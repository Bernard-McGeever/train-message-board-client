import { Component } from '@angular/core';
import { ApplicationSettingsService } from "../../core/services/application-settings/application-settings.service";
import { HuxleyTwoService } from "../../service/huxley-two/huxley-two.service";
import { BaseTableComponent } from "../base/base-table/base-table.component";
import { SharedService } from "../../core/services/shared/shared.service";
import { CRS } from "../../core/services/gateway/CrsApi/crs-api.service";
import { DeparturesAndArrivals } from "../../core/services/gateway/DeparturesAndArrivalsApi/departures-and-arrivals-api";

@Component({
  selector: 'app-departures-and-arrivals',
  templateUrl: '../base/base-table/base-table.component.html',
  styleUrls: ['../base/base-table/base-table.component.scss']
})
export class DeparturesAndArrivalsComponent  extends BaseTableComponent {

  constructor(_settings: ApplicationSettingsService, _shared: SharedService, _huxleyTwoService: HuxleyTwoService) {
    super(_settings, _shared, _huxleyTwoService);
  }

  populateCurrentServices(crs: CRS): void {
    this.subscriptions.push(this.huxleyTwoService.getDeparturesAndArrivals(crs).subscribe((departuresAndArrivals: DeparturesAndArrivals) => {
      if (this.searchTerm) {
        this.filteredServices = [];
        this.currentServices = departuresAndArrivals.trainServices.map(service => {
          return BaseTableComponent.convertTrainServiceToWrapper(service);
        });
        this.currentServices.forEach(trainService => {
          this.huxleyTwoService.getService(trainService.serviceIdUrlSafe).subscribe(service => {
            service.previousCallingPoints?.forEach(previousCallingPoint => previousCallingPoint.callingPoint.some(callingPoint => {
              if (callingPoint.locationName.toLowerCase().trim().includes(this.searchTerm.toLowerCase().trim())) {
               this.filteredServices.push(trainService);
             }
            }));
            service.subsequentCallingPoints?.forEach(subsequentCallingPoint => subsequentCallingPoint.callingPoint.some(callingPoint => {
              if (callingPoint.locationName.toLowerCase().trim().includes(this.searchTerm.toLowerCase().trim())) {
                this.filteredServices.push(trainService);
              }
            }));
          });
        });
      } else {
        this.filteredServices = departuresAndArrivals.trainServices.map(service => {
          return BaseTableComponent.convertTrainServiceToWrapper(service);
        });
      }
    }));
  }

  populateProperties(): void {
    this.properties = ['operatorCode', 'origin', 'destination', 'platform', 'sta', 'std', 'eta', 'etd', 'isCancelled'];
  }
}
