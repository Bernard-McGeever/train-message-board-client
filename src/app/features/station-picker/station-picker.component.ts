import { Component, OnInit } from '@angular/core';
import {ApplicationSettingsService} from "../../core/services/application-settings/application-settings.service";
import {HuxleyTwoService} from "../../service/huxley-two/huxley-two.service";
import {StationNameMap} from "../../models/CRS";

@Component({
  selector: 'app-station-picker',
  templateUrl: './station-picker.component.html',
  styleUrls: ['./station-picker.component.scss']
})
export class StationPickerComponent implements OnInit {

  public stationOptions: StationNameMap[] | undefined = undefined;
  public dropDownIsShown: boolean = false;

  public currentStation: StationNameMap = new StationNameMap();

  constructor(private settings: ApplicationSettingsService, private huxleyTwoService: HuxleyTwoService) {}

  ngOnInit(): void {
    this.currentStation = this.settings.currentCRS;
    this.populateStationOptions();
  }

  public onStationOptionClicked(option: StationNameMap) {
    this.currentStation = option;
    this.settings.currentCRS = this.currentStation;
    this.populateStationOptions();
    this.showHideStationOptions();
  }

  public showHideStationOptions(): void {
    this.dropDownIsShown = !this.dropDownIsShown;
  }

  private populateStationOptions(): void {
    this.stationOptions = this.huxleyTwoService.getCRSOptions().map(crs => new StationNameMap(crs.stationName, crs.crsCode))
                                                               .filter(stationNameMap => stationNameMap !== this.currentStation);
  }
}
