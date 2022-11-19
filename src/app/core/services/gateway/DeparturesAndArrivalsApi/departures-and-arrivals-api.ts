import { Injectable } from '@angular/core';
import {Observable, of as _observableOf} from "rxjs";
import {throwError as _observableThrow} from "rxjs/internal/observable/throwError";
import {HttpService} from "../../security/http/http.service";
import {RuntimeEnvironmentService} from "../../runtime-enviroment/runtime-environment.service";
import {HttpHeaders, HttpResponse, HttpResponseBase} from "@angular/common/http";
import {mergeMap as _observableMergeMap} from "rxjs/operators";
import {catchError as _observableCatch} from "rxjs/internal/operators/catchError";

@Injectable({
  providedIn: 'root'
})
export class DeparturesAndArrivalsApi {

  private readonly baseurl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(private http: HttpService, private runtimeEnvironmentService: RuntimeEnvironmentService) {
    this.http = http;
    this.baseurl = this.runtimeEnvironmentService.getHuxley2Url();
  }

  getDepartures(crs: String): Observable<DeparturesAndArrivals> {
    let _url = this.baseurl + 'departures/' + crs + '/20';

    let options_ : any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };

    return this.http.get(_url, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetDeparturesAndArrivals(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetDeparturesAndArrivals(<any>response_);
        } catch (e) {
          return <Observable<DeparturesAndArrivals>><any>_observableThrow(e);
        }
      } else
        return <Observable<DeparturesAndArrivals>><any>_observableThrow(response_);
    }));
  }

  getArrivals(crs: String): Observable<DeparturesAndArrivals> {
    let _url = this.baseurl + 'arrivals/' + crs + '/20';

    let options_ : any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };

    return this.http.get(_url, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetDeparturesAndArrivals(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetDeparturesAndArrivals(<any>response_);
        } catch (e) {
          return <Observable<DeparturesAndArrivals>><any>_observableThrow(e);
        }
      } else
        return <Observable<DeparturesAndArrivals>><any>_observableThrow(response_);
    }));
  }

  getDeparturesAndArrivals(crs: String): Observable<DeparturesAndArrivals> {
    let _url = this.baseurl + 'all/' + crs + '/20';

    let options_ : any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };

    return this.http.get(_url, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetDeparturesAndArrivals(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetDeparturesAndArrivals(<any>response_);
        } catch (e) {
          return <Observable<DeparturesAndArrivals>><any>_observableThrow(e);
        }
      } else
        return <Observable<DeparturesAndArrivals>><any>_observableThrow(response_);
    }));
  }

  protected processGetDeparturesAndArrivals(response: HttpResponseBase): Observable<DeparturesAndArrivals> {
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
    return _observableOf<DeparturesAndArrivals>(<any>null);
  }
}

export class DeparturesAndArrivals implements IDeparturesAndArrivals {
  areServicesAvailable: boolean;
  busServices?: Service[] | undefined;
  crs: string;
  ferryServices?: Service[] | undefined;
  filterLocationName?: string | undefined;
  filterType: number;
  filtercrs?: string | undefined;
  generatedAt: string;
  locationName: string;
  nrccMessages?: NRCCMessages[] | undefined;
  platformAvailable: boolean;
  trainServices: Service[];

  constructor(data?: IDeparturesAndArrivals) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.areServicesAvailable = data["areServicesAvailable"];
      if (Array.isArray(data["busServices"])) {
        this.busServices = [] as any;
        for (let item of data["busServices"])
          this.busServices?.push(Service.fromJson(item));
      }
      this.crs = data["crs"];
      if (Array.isArray(data["ferryServices"])) {
        this.ferryServices = [] as any;
        for (let item of data["ferryServices"])
          this.ferryServices?.push(Service.fromJson(item));
      }
      this.filterLocationName = data["filterLocationName"];
      this.filterType = data["filterType"];
      this.filtercrs = data["filtercrs"];
      this.generatedAt = data["generatedAt"];
      this.locationName = data["locationName"];
      if (Array.isArray(data["nrccMessages"])) {
        for (let item of data["nrccMessages"])
          this.nrccMessages?.push(NRCCMessages.fromJson(item));
      }
      this.platformAvailable = data["platformAvailable"];
      if (Array.isArray(data["trainServices"])) {
        for (let item of data["trainServices"])
          this.trainServices?.push(Service.fromJson(item));
      }
    }
  }

  static fromJson(data: any): DeparturesAndArrivals {
    data = typeof data === 'object' ? data : {};
    let result = new DeparturesAndArrivals();
    result.init(data);
    return result;
  }

  toJson(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["areServicesAvailable"] = this.areServicesAvailable;
    data["busServices"] = this.busServices;
    data["crs"] = this.crs;
    data["ferryServices"] = this.ferryServices;
    data["filterLocationName"] = this.filterLocationName;
    data["filterType"] = this.filterType;
    data["filtercrs"] = this.filtercrs;
    data["generatedAt"] = this.generatedAt;
    data["locationName"] = this.locationName;
    data["nrccMessages"] = this.nrccMessages;
    data["platformAvailable"] = this.platformAvailable;
    data["trainServices"] = this.trainServices;
    return data;
  }
}

export interface IDeparturesAndArrivals {
  trainServices: IService[];
  busServices?: IService[] | undefined;
  ferryServices?: IService[] | undefined;
  generatedAt: string;
  locationName: string;
  crs: string;
  filterLocationName?: string | undefined;
  filtercrs?: string | undefined;
  filterType: number;
  nrccMessages?: INRCCMessages[] | undefined;
  platformAvailable: boolean;
  areServicesAvailable: boolean;
}

export class Service implements IService {
  formation?: Formation | undefined;
  origin: Station[];
  destination: Station[];
  currentOrigins?: Station[] | undefined;
  currentDestinations?: Station[] | undefined;
  rsid: string;
  serviceIdPercentEncoded: string;
  serviceIdGuid: string;
  serviceIdUrlSafe: string;
  sta?: string | undefined;
  eta?: string | undefined;
  std?: string | undefined;
  etd?: string | undefined;
  platform?: string | undefined;
  operator: string
  operatorCode: string;
  isCircularRoute: boolean;
  isCancelled: boolean;
  filterLocationCancelled: boolean;
  serviceType: number;
  length: number;
  detachFront: boolean;
  isReverseFormation: boolean;
  cancelReason?: string | undefined;
  delayReason?: string | undefined;
  serviceID: string;
  adhocAlerts?: string | undefined;

  constructor(data?: IService) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.formation = data["formation"] ? Formation.fromJson(data["formation"]) : <any>undefined;
      if (Array.isArray(data["origin"])) {
        this.origin = [] as any;
        for (let item of data["origin"])
          this.origin.push(item);
      }
      if (Array.isArray(data["destination"])) {
        this.destination = [] as any;
        for (let item of data["destination"])
          this.destination.push(item);
      }
      if (Array.isArray(data["currentOrigins"])) {
        this.currentOrigins = [] as any;
        for (let item of data["currentOrigins"])
          this.currentOrigins?.push(item);
      }
      if (Array.isArray(data["currentDestinations"])) {
        this.currentDestinations = [] as any;
        for (let item of data["currentDestinations"])
          this.currentDestinations?.push(item);
      }
      this.rsid = data["rsid"];
      this.serviceIdPercentEncoded = data["serviceIdPercentEncoded"];
      this.serviceIdGuid = data["serviceIdGuid"];
      this.serviceIdUrlSafe = data["serviceIdUrlSafe"];
      this.sta = data["sta"];
      this.eta = data["eta"];
      this.std = data["std"];
      this.etd = data["etd"];
      this.platform = data["platform"];
      this.operator = data["operator"];
      this.operatorCode = data["operatorCode"];
      this.isCircularRoute = data["isCircularRoute"];
      this.isCancelled = data["isCancelled"];
      this.filterLocationCancelled = data["filterLocationCancelled"];
      this.serviceType = data["serviceType"];
      this.length = data["length"];
      this.detachFront = data["detachFront"];
      this.isReverseFormation = data["isReverseFormation"];
      this.cancelReason = data["cancelReason"];
      this.delayReason = data["delayReason"];
      this.serviceID = data["serviceID"];
      this.adhocAlerts = data["adhocAlerts"];
    }
  }

  static fromJson(data: any): Service {
    data = typeof data === 'object' ? data : {};
    let result = new Service();
    result.init(data);
    return result;
  }
}

export interface IService {
  formation?: IFormation | undefined;
  origin: IStation[];
  destination: IStation[];
  currentOrigins?: IStation[] | undefined;
  currentDestinations?: IStation[] | undefined;
  rsid: string;
  serviceIdPercentEncoded: string;
  serviceIdGuid: string;
  serviceIdUrlSafe: string;
  sta?: string | undefined;
  eta?: string | undefined;
  std?: string | undefined;
  etd?: string | undefined;
  platform?: string | undefined;
  operator: string
  operatorCode: string;
  isCircularRoute: boolean;
  isCancelled: boolean;
  filterLocationCancelled: boolean;
  serviceType: number;
  length: number;
  detachFront: boolean;
  isReverseFormation: boolean;
  cancelReason?: string | undefined;
  delayReason?: string | undefined;
  serviceID: string;
  adhocAlerts?: string | undefined;
}

export class NRCCMessages implements INRCCMessages {
  value: string;

  constructor(data?: INRCCMessages) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.value = data["value"];
    }
  }

  static fromJson(data: any): NRCCMessages {
    data = typeof data === 'object' ? data : {};
    let result = new NRCCMessages();
    result.init(data);
    return result;
  }

  toJson(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["value"] = this.value;
    return data;
  }
}

export interface INRCCMessages {
  value: string;
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

  toJson(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["avgLoading"] = this.avgLoading;
    data["avgLoadingSpecified"] = this.avgLoadingSpecified;
    data["coaches"] = this.coaches;
    return data;
  }
}

export interface IFormation {
  avgLoading: number;
  avgLoadingSpecified: boolean;
  coaches: ICoach[];
}

export class Station implements IStation {
  locationName: string;
  crs: string;
  via?: string | undefined;
  futureChangeTo?: string | undefined;
  assocIsCancelled: boolean;

  constructor(data?: IStation) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.locationName = data["locationName"];
      this.crs = data["crs"];
      this.via = data["via"];
      this.futureChangeTo = data["futureChangeTo"];
      this.assocIsCancelled = data["assocIsCancelled"];
    }
  }

  static fromJson(data: any): Station {
    data = typeof data === 'object' ? data : {};
    let result = new Station();
    result.init(data);
    return result;
  }

  toJson(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["locationName"] = this.locationName;
    data["crs"] = this.crs;
    data["via"] = this.via;
    data["futureChangeTo"] = this.futureChangeTo;
    data["assocIsCancelled"] = this.assocIsCancelled;
    return data;
  }
}

export interface IStation {
  locationName: string;
  crs: string;
  via?: string | undefined;
  futureChangeTo?: string | undefined;
  assocIsCancelled: boolean;
}

export class Coach implements ICoach {
  coachClass: string;
  toilet?: Toilet | undefined;
  loading: number;
  loadingSpecified: boolean;
  number: string;

  constructor(data?: ICoach) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.coachClass = data["coachClass"];
      this.toilet = data["toilet"] ? Toilet.fromJson(data["toilet"]) : <any>undefined;
      this.loading = data["loading"];
      this.loadingSpecified = data["loadingSpecified"];
      this.number = data["number"];
    }
  }

  static fromJson(data: any): Coach {
    data = typeof data === 'object' ? data : {};
    let result = new Coach();
    result.init(data);
    return result;
  }

  toJson(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["coachClass"] = this.coachClass;
    data["toilet"] = this.toilet ? this.toilet.toJson() : <any>undefined;
    data["loading"] = this.loading;
    data["loadingSpecified"] = this.loadingSpecified;
    data["number"] = this.number;
    return data;
  }
}

export interface ICoach {
  coachClass: string;
  toilet?: IToilet | undefined;
  loading: number;
  loadingSpecified: boolean;
  number: string;
}

export class Toilet implements IToilet {
  status: number;
  value: string;

  constructor(data?: IToilet) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.status = data["status"];
      this.value = data["value"];
    }
  }

  static fromJson(data: any): Toilet {
    data = typeof data === 'object' ? data : {};
    let result = new Toilet();
    result.init(data);
    return result;
  }

  toJson(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["status"] = this.status;
    data["value"] = this.value;
    return data;
  }
}

export interface IToilet {
  status: number;
  value: string;
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
