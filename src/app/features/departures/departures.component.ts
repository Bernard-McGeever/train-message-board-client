import { Component } from '@angular/core';
import { ApplicationSettingsService } from "../../core/services/application-settings/application-settings.service";
import { HuxleyTwoService } from "../../service/huxley-two/huxley-two.service";
import { BaseTableComponent } from "../base/base-table/base-table.component";
import {SharedService} from "../../core/services/shared/shared.service";
import {CRS} from "../../core/services/gateway/CrsApi/crs-api.service";
import {DeparturesAndArrivals, DeparturesAndArrivalsApi} from "../../core/services/gateway/DeparturesAndArrivalsApi/departures-and-arrivals-api";

@Component({
  selector: 'app-departures',
  templateUrl: '../base/base-table/base-table.component.html',
  styleUrls: ['../base/base-table/base-table.component.scss']
})
export class DeparturesComponent extends BaseTableComponent {

  constructor(_settings: ApplicationSettingsService, _shared: SharedService, _huxleyTwoService: HuxleyTwoService) {
    super(_settings, _shared, _huxleyTwoService);
  }

  populateCurrentServices(crs: CRS): void {
    this.subscriptions.push(this.huxleyTwoService.getDepartures(crs).subscribe((departuresAndArrivals: DeparturesAndArrivals) => {
      this.currentServices = departuresAndArrivals.trainServices.map(service => {
        return BaseTableComponent.convertTrainServiceToWrapper(service);
      });
    }));
  }

  populateProperties(): void {
    this.properties = ['operatorCode', 'origin', 'destination', 'platform', 'std', 'etd', 'isCancelled'];
  }
}
