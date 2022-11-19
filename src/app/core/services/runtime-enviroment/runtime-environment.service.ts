import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";

export abstract class IRuntimeEnvironmentService {
  public abstract getHuxley2Url(): string;
}

@Injectable({
  providedIn: 'root'
})
export class RuntimeEnvironmentService implements IRuntimeEnvironmentService {

  getHuxley2Url(): string {
    return environment.defaultHuxley2Url;
  }
}
