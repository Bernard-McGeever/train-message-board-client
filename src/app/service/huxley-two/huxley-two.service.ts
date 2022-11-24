import {Injectable} from '@angular/core';
import {CRS, CrsApiService} from "../../core/services/gateway/CrsApi/crs-api.service";
import {DeparturesAndArrivalsApi} from "../../core/services/gateway/DeparturesAndArrivalsApi/departures-and-arrivals-api";
import {ServicesApi} from "../../core/services/gateway/ServicesApi/services-api.service";

@Injectable({
  providedIn: 'root'
})
export class HuxleyTwoService {

  constructor(private crsApi: CrsApiService, private departuresAndArrivalsApi: DeparturesAndArrivalsApi, private serviceApi: ServicesApi) { }

  public getArrivals(station: CRS)  {
    return this.departuresAndArrivalsApi.getArrivals(station.crsCode);
  }

  public getDepartures(station: CRS) {
    return this.departuresAndArrivalsApi.getDepartures(station.crsCode);
  }

  public getDeparturesAndArrivals(station: CRS) {
    return this.departuresAndArrivalsApi.getDeparturesAndArrivals(station.crsCode);
  }

  public getCRSOptions() {
    return this.crsApi.getCrs();
  }

  public getService(serviceIdUrlSafe: string) {
    return this.serviceApi.getService(serviceIdUrlSafe);
  }
}
