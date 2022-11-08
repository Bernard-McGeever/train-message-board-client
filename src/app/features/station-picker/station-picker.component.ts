import {Component, OnInit} from '@angular/core';
import {ApplicationSettingsService} from "../../core/services/application-settings/application-settings.service";
import {HuxleyTwoService} from "../../service/huxley-two/huxley-two.service";
import {StationNameMap} from "../../models/CRS";
import {BasePickerComponent} from "../base/base-picker/base-picker.component";

@Component({
  selector: 'app-station-picker',
  templateUrl: './station-picker.component.html',
  styleUrls: ['./station-picker.component.scss']
})
export class StationPickerComponent extends BasePickerComponent<StationNameMap> implements OnInit {
  public currentStation: StationNameMap = new StationNameMap();

  constructor(_huxleyTwoService: HuxleyTwoService, private settings: ApplicationSettingsService) {
    super(_huxleyTwoService);
  }

  ngOnInit(): void {
    super.ngOnInit()
    this.currentStation = this.settings.currentCRS;
  }

  public onStationOptionClicked(option: StationNameMap) {
    this.currentStation = option;
    this.settings.currentCRS = this.currentStation;
    this.populateOptions();
    this.showHideOptions();
  }

  populateOptions(): void {
    this.options = this.huxleyTwoService.getCRSOptions().map(crs => new StationNameMap(crs.stationName, crs.crsCode))
                                                               .filter(stationNameMap => stationNameMap !== this.currentStation);
  }
}
