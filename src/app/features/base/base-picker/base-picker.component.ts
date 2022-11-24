import {Component} from '@angular/core';
import {HuxleyTwoService} from "../../../service/huxley-two/huxley-two.service";

@Component({
  template: ''
})
export abstract class BasePickerComponent<T> {
  public options: T[] | undefined = undefined;

  protected constructor(public huxleyTwoService: HuxleyTwoService) { }
}
