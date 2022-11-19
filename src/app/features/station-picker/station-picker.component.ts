import {Component, OnInit} from '@angular/core';
import {ApplicationSettingsService} from "../../core/services/application-settings/application-settings.service";
import {HuxleyTwoService} from "../../service/huxley-two/huxley-two.service";
import {BasePickerComponent} from "../base/base-picker/base-picker.component";
import {Subscription} from "rxjs";
import {CRS} from "../../core/services/gateway/CrsApi/crs-api.service";

@Component({
  selector: 'app-station-picker',
  templateUrl: './station-picker.component.html',
  styleUrls: ['./station-picker.component.scss']
})
export class StationPickerComponent extends BasePickerComponent<CRS> implements OnInit {
  public currentStation: CRS = new CRS();

  private subscriptions: Array<Subscription> = [];

  constructor(_huxleyTwoService: HuxleyTwoService, private settings: ApplicationSettingsService) {
    super(_huxleyTwoService);
  }

  ngOnInit(): void {
    this.currentStation = this.settings.currentCRS;

    this.subscriptions.push(this.huxleyTwoService.getCRSOptions().subscribe((crs: CRS[]) => {
      this.options = crs.map(crs => new CRS(crs))
      .filter(stationNameMap => stationNameMap !== this.currentStation);
    }))
  }

  public onStationOptionClicked(option: CRS) {
    this.currentStation = option;
    this.settings.currentCRS = this.currentStation;
    this.showHideOptions();
  }
}
