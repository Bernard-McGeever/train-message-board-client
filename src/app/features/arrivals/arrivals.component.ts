import { Component } from '@angular/core';
import { ApplicationSettingsService } from "../../core/services/application-settings/application-settings.service";
import { HuxleyTwoService } from "../../service/huxley-two/huxley-two.service";
import { BaseTableComponent } from "../base/base-table.component";
import {StationNameMap} from "../../models/CRS";
import {SharedService} from "../../core/services/shared/shared.service";

@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.scss']
})
export class ArrivalsComponent extends BaseTableComponent {

  constructor(_settings: ApplicationSettingsService, _shared: SharedService, _huxleyTwoService: HuxleyTwoService) {
    super(_settings, _shared, _huxleyTwoService);
  }

  populateCurrentServices(crs: StationNameMap): void {
    this.currentServices = this.huxleyTwoService.getArrivals(crs)?.trainServices.map(service => {
      return BaseTableComponent.convertTrainServiceToWrapper(service);
    });
  }
}
