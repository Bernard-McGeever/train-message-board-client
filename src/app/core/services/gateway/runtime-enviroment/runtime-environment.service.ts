import {environment} from "../../../../../environments/environment";
import {Injectable} from "@angular/core";

export abstract class IRuntimeEnvironmentService {
  public abstract getHuxley2Url(): string;
}

@Injectable()
export class RuntimeEnvironmentService implements IRuntimeEnvironmentService {
  getHuxley2Url(): string {
    return environment.defaultHuxley2Url;
  }
}
