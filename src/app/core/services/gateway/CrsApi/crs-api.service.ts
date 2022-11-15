import {Injectable, InjectionToken} from "@angular/core";
import {IAuthHttp} from "../../security/http/auth-http.service";
import {RuntimeEnvironmentService} from "../runtime-enviroment/runtime-environment.service";
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import {HttpResponse, HttpResponseBase} from "@angular/common/http";

export const API_BASE_URL = new InjectionToken('API_BASE_URL');

@Injectable()
export class CrsApiService {
  private http: IAuthHttp;
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(http: IAuthHttp, private runtimeEnvironmentService: RuntimeEnvironmentService) {
    this.http = http;
    this.baseUrl = this.runtimeEnvironmentService.getHuxley2Url() + "crs";
  }

  getCrs(): Observable<CRS[]> {
    let url_ = this.baseUrl;

    return this.http.get(url_).pipe(_observableMergeMap((response_ : any) => {
      return this.processGetCrs(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetCrs(<any>response_);
        } catch (e) {
          return <Observable<CRS[]>><any>_observableThrow(e);
        }
      } else
        return <Observable<CRS[]>><any>_observableThrow(response_);
    }));
  }

  protected processGetCrs(response: HttpResponseBase): Observable<CRS[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200) {
            result200.push(CRS.fromJS(item))
          }
        }
        return _observableOf(result200);
      }));
    } else if (status === 400) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("Invalid input / bad request", status, _responseText, _headers);
      }));
    } else if (status === 403) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("User not authorised", status, _responseText, _headers);
      }));
    } else if (status === 415) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("Invalid content type", status, _responseText, _headers);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<CRS[]>(<any>null);
  }
}

export interface ICRS {
  stationName?: string;
  crsCode?: string;
}

export class CRS implements ICRS{
  stationName?: string;
  crsCode?: string;

  constructor(data?: ICRS) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.crsCode = data["crsCode"];
      this.stationName = data["stationName"];
    }
  }

  static fromJS(data: any): CRS {
    data = typeof data === 'object' ? data : {};
    let result = new CRS();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["crsCode"] = this.crsCode;
    data["stationName"] = this.stationName;
    return data;
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
