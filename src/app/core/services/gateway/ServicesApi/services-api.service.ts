import { Injectable } from '@angular/core';
import {HttpService} from "../../security/http/http.service";
import {RuntimeEnvironmentService} from "../../runtime-enviroment/runtime-environment.service";
import {Observable, of as _observableOf} from "rxjs";
import {Coach, ICoach, IService} from "../DeparturesAndArrivalsApi/departures-and-arrivals-api";
import {HttpHeaders, HttpResponse, HttpResponseBase} from "@angular/common/http";
import {mergeMap as _observableMergeMap} from "rxjs/operators";
import {catchError as _observableCatch} from "rxjs/internal/operators/catchError";
import {throwError as _observableThrow} from "rxjs/internal/observable/throwError";

@Injectable({
  providedIn: 'root'
})
export class ServicesApi {

  private readonly baseurl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(private http: HttpService, private runtimeEnvironmentService: RuntimeEnvironmentService) {
    this.http = http;
    this.baseurl = this.runtimeEnvironmentService.getHuxley2Url() + 'service/';
  }

  getService(serviceIdUrlSafe: string): Observable<TrainService> {
    let _url = this.baseurl + serviceIdUrlSafe;

    let options_ : any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };

    return this.http.get(_url, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetService(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetService(<any>response_);
        } catch (e) {
          return <Observable<TrainService>><any>_observableThrow(e);
        }
      } else
        return <Observable<TrainService>><any>_observableThrow(response_);
    }));
  }

  protected processGetService(response: HttpResponseBase): Observable<TrainService> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        return _observableOf(resultData200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<TrainService>(<any>null);
  }
}

export interface ITrainService {
  formation: Formation;
  previousCallingPoints?: CallingPoints[] | undefined;
  subsequentCallingPoints: CallingPoints[];
  generatedAt: string;
  serviceType: number;
  locationName: string;
  crs: string;
  operator: string;
  operatorCode: string;
  rsid: string;
  isCancelled: boolean;
  cancelReason?: string | undefined;
  delayReason?: string | undefined;
  overdueMessage: string | undefined;
  length: number;
  detachFront: boolean;
  isReverseFormation: boolean;
  platform: string;
  sta?: string | undefined;
  eta?: string | undefined;
  ata?: string | undefined;
  std?: string | undefined;
  etd?: string | undefined;
  atd?: string | undefined;
}

export class TrainService implements ITrainService {
  ata: string | undefined;
  atd: string | undefined;
  cancelReason: string | undefined;
  crs: string;
  delayReason: string | undefined;
  detachFront: boolean;
  eta: string | undefined;
  etd: string | undefined;
  formation: Formation;
  generatedAt: string;
  isCancelled: boolean;
  isReverseFormation: boolean;
  length: number;
  locationName: string;
  operator: string;
  operatorCode: string;
  overdueMessage: string | undefined;
  platform: string;
  previousCallingPoints: CallingPoints[] | undefined;
  rsid: string;
  serviceType: number;
  sta: string | undefined;
  std: string | undefined;
  subsequentCallingPoints: CallingPoints[];

  constructor(data?: IService) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    this.ata = data["ata"];
    this.atd = data["atd"];
    this.cancelReason = data["cancelReason"];
    this.crs = data["crs"];
    this.delayReason = data["delayReason"];
    this.detachFront = data["detachFront"];
    this.eta = data["eta"];
    this.etd = data["etd"];
    this.formation = data["formation"];
    this.generatedAt = data["generatedAt"];
    this.isCancelled = data["isCancelled"];
    this.isReverseFormation = data["isReverseFormation"];
    this.length = data["length"];
    this.locationName = data["locationName"];
    this.operator = data["operator"];
    this.operatorCode = data["operatorCode"];
    this.overdueMessage = data["overdueMessage"];
    this.platform = data["platform"];
    if (Array.isArray(data["previousCallingPoints"])) {
      this.previousCallingPoints = [] as any;
      for (let item of data["previousCallingPoints"])
        this.previousCallingPoints.push(item);
    }
    this.rsid = data["rsid"];
    this.serviceType = data["serviceType"];
    this.sta = data["sta"];
    this.std = data["std"];
    if (Array.isArray(data["subsequentCallingPoints"])) {
      this.subsequentCallingPoints = [] as any;
      for (let item of data["subsequentCallingPoints"])
        this.subsequentCallingPoints.push(item);
    }
  }

  static fromJson(data: any): TrainService {
    data = typeof data === 'object' ? data : {};
    let result = new TrainService();
    result.init(data);
    return result;
  }
}

export class Formation implements IFormation {
  avgLoading: number;
  avgLoadingSpecified: boolean;
  coaches: Coach[];

  constructor(data?: IFormation) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.avgLoading = data["avgLoading"];
      this.avgLoadingSpecified = data["avgLoadingSpecified"];
      if (Array.isArray(data["coaches"])) {
        this.coaches = [] as any;
        for (let item of data["coaches"])
          this.coaches.push(item);
      }
    }
  }

  static fromJson(data: any): Formation {
    data = typeof data === 'object' ? data : {};
    let result = new Formation();
    result.init(data);
    return result;
  }
}

export interface IFormation {
  avgLoading: number;
  avgLoadingSpecified: boolean;
  coaches: ICoach[];
}

export interface ICallingPoint {
  locationName: string;
  crs: string;
  st: string;
  et: string;
  at?: string | undefined;
  isCancelled: boolean
  length: number;
  detachFront: boolean;
  formation: Formation;
  adhocAlerts?: string | undefined;
}

export class CallingPoint implements ICallingPoint {
  adhocAlerts: string | undefined;
  at: string | undefined;
  crs: string;
  detachFront: boolean;
  et: string;
  formation: Formation;
  isCancelled: boolean;
  length: number;
  locationName: string;
  st: string;

  constructor(data?: ICallingPoint) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.adhocAlerts = data["adhocAlerts"];
      this.at = data["at"];
      this.crs = data["crs"];
      this.detachFront = data["detachFront"];
      this.et = data["et"];
      this.formation = data["formation"];
      this.isCancelled = data["isCancelled"];
      this.length = data["length"];
      this.locationName = data["locationName"];
      this.st = data["st"];
    }
  }

  static fromJson(data: any): CallingPoint {
    data = typeof data === 'object' ? data : {};
    let result = new CallingPoint();
    result.init(data);
    return result;
  }
}

export interface ICallingPoints {
  callingPoint: CallingPoint[];
  serviceType: number;
  serviceChangeRequired: boolean;
  assocIsCancelled: boolean;
}

export class CallingPoints implements ICallingPoints {
  assocIsCancelled: boolean;
  callingPoint: CallingPoint[];
  serviceChangeRequired: boolean;
  serviceType: number;

  constructor(data?: ICallingPoint) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.assocIsCancelled = data["assocIsCancelled"];
      if (Array.isArray(data["callingPoint"])) {
        this.callingPoint = [] as any;
        for (let item of data["callingPoint"])
          this.callingPoint.push(item);
      }
      this.serviceChangeRequired = data["serviceChangeRequired"];
      this.serviceType = data["serviceType"];
    }
  }

  static fromJson(data: any): CallingPoints {
    data = typeof data === 'object' ? data : {};
    let result = new CallingPoints();
    result.init(data);
    return result;
  }
}

export class ApiException extends Error {
  message: string;
  status: number;
  response: string;
  headers: { [key: string]: any; };
  result: any;

  constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isApiException = true;

  static isApiException(obj: any): obj is ApiException {
    return obj.isApiException === true;
  }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
  if (result !== null && result !== undefined)
    return _observableThrow(result);
  else
    return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
  return new Observable<string>((observer: any) => {
    if (!blob) {
      observer.next("");
      observer.complete();
    } else {
      let reader = new FileReader();
      reader.onload = event => {
        observer.next((<any>event.target).result);
        observer.complete();
      };
      reader.readAsText(blob);
    }
  });
}


