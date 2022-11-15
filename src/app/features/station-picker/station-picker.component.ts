import {Component, OnInit} from '@angular/core';
import {ApplicationSettingsService} from "../../core/services/application-settings/application-settings.service";
import {HuxleyTwoService} from "../../service/huxley-two/huxley-two.service";
import {StationNameMap} from "../../models/CRS";
import {BasePickerComponent} from "../base/base-picker/base-picker.component";
import {Subscription} from "rxjs";
import {CRS} from "../../core/services/gateway/CrsApi/crs-api.service";

@Component({
  selector: 'app-station-picker',
  templateUrl: './station-picker.component.html',
  styleUrls: ['./station-picker.component.scss']
})
export class StationPickerComponent extends BasePickerComponent<StationNameMap> implements OnInit {
  public currentStation: StationNameMap = new StationNameMap();
  public options2: StationNameMap[] | undefined = undefined;

  private subscriptions: Array<Subscription> = [];

  constructor(_huxleyTwoService: HuxleyTwoService, private settings: ApplicationSettingsService) {
    super(_huxleyTwoService);
  }

  ngOnInit(): void {
    super.ngOnInit()
    this.currentStation = this.settings.currentCRS;

    this.subscriptions.push(this.huxleyTwoService.getCRSOptionsAPI().subscribe((crs: CRS[]) => {
      this.options2 = crs.map(crs => new StationNameMap(crs.stationName, crs.crsCode))
      .filter(stationNameMap => stationNameMap !== this.currentStation);
    }))
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
