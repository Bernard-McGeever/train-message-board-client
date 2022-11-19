import { Injectable } from '@angular/core';
import {HttpClient, HttpResponseBase} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  public get(url: string, options?: any): Observable<{} | HttpResponseBase> {
    return this.http.get(url, options);
  }
}
