import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient, HttpResponseBase} from "@angular/common/http";

export abstract class IAuthHttp {
  public abstract get(url: string, options?: any): Observable<any>;
}

@Injectable()
export class AuthHttp implements IAuthHttp {
  constructor(private http: HttpClient) {
  }

  public get(url: string, options?: any): Observable<{} | HttpResponseBase> {
    return this.http.get(url);
  }
}
