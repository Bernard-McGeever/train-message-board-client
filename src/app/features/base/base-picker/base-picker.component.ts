import {Component, OnInit} from '@angular/core';
import {HuxleyTwoService} from "../../../service/huxley-two/huxley-two.service";
import {ApplicationSettingsService} from "../../../core/services/application-settings/application-settings.service";

@Component({
  template: ''
})
export abstract class BasePickerComponent<T> implements OnInit {
  public dropDownIsShown: boolean = false;
  public options: T[] | undefined = undefined;

  protected constructor(public huxleyTwoService: HuxleyTwoService) { }

  ngOnInit(): void {
    this.populateOptions();
  }

  public showHideOptions(): void {
    this.dropDownIsShown = !this.dropDownIsShown;
  }

  abstract populateOptions(): void;
}
