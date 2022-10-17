import { Injectable } from '@angular/core';
import {Subject, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public serviceIdUrlSafeSubject = new Subject<string>();

  constructor() {}

  public subscribeToServiceIdUrlSafeSubject(next: (url: string) => void): Subscription {
    return this.serviceIdUrlSafeSubject.subscribe(next);
  }

  public setService(serviceIdUrlSafe: string) {
    this.serviceIdUrlSafeSubject.next(serviceIdUrlSafe);
  }
}
