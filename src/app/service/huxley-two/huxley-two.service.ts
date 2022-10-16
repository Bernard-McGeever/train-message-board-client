import {Injectable} from '@angular/core';
import {MOCK_CRS_ALL} from "../../mocks/mock-crs-responces";
import {BoardType} from "../../models/Board.enum";
import {StationNameMap} from "../../models/CRS";
import {
  MOCK_ARRIVALS_BHM, MOCK_ARRIVALS_CDF,
  MOCK_ARRIVALS_DBY, MOCK_ARRIVALS_EDB,
  MOCK_ARRIVALS_EUS,
  MOCK_ARRIVALS_GLC,
  MOCK_ARRIVALS_MKC,
  MOCK_ARRIVALS_PAD
} from "../../mocks/mock-arrivals-responces";
import {
  MOCK_DEPARTURES_BHM, MOCK_DEPARTURES_CDF,
  MOCK_DEPARTURES_DBY, MOCK_DEPARTURES_EDB,
  MOCK_DEPARTURES_EUS,
  MOCK_DEPARTURES_GLC,
  MOCK_DEPARTURES_MKC,
  MOCK_DEPARTURES_PAD
} from "../../mocks/mock-departures-responces";
import {
  MOCK_DEPARTURES_AND_ARRIVALS_BHM,
  MOCK_DEPARTURES_AND_ARRIVALS_CDF, MOCK_DEPARTURES_AND_ARRIVALS_DBY,
  MOCK_DEPARTURES_AND_ARRIVALS_EDB, MOCK_DEPARTURES_AND_ARRIVALS_EUS,
  MOCK_DEPARTURES_AND_ARRIVALS_GLC, MOCK_DEPARTURES_AND_ARRIVALS_MKC, MOCK_DEPARTURES_AND_ARRIVALS_PAD
} from "../../mocks/mock-departures-and-arrivals-responces";

@Injectable({
  providedIn: 'root'
})
export class HuxleyTwoService {

  constructor() { }

  public getArrivals(station: StationNameMap)  {
    switch (station.crsCode) {
      case 'BHM':
        return MOCK_ARRIVALS_BHM;
      case 'PAD':
        return MOCK_ARRIVALS_PAD;
      case 'EUS':
        return MOCK_ARRIVALS_EUS;
      case 'DBY':
        return MOCK_ARRIVALS_DBY;
      case 'GLC':
        return MOCK_ARRIVALS_GLC;
      case 'MKC':
        return MOCK_ARRIVALS_MKC;
      case 'CDF':
        return MOCK_ARRIVALS_CDF;
      case 'EDB':
        return MOCK_ARRIVALS_EDB;
      default:
        return null;
    }
  }

  public getDepartures(station: StationNameMap) {
    switch (station.crsCode) {
      case 'BHM':
        return MOCK_DEPARTURES_BHM;
      case 'PAD':
        return MOCK_DEPARTURES_PAD;
      case 'EUS':
        return MOCK_DEPARTURES_EUS;
      case 'DBY':
        return MOCK_DEPARTURES_DBY;
      case 'GLC':
        return MOCK_DEPARTURES_GLC;
      case 'MKC':
        return MOCK_DEPARTURES_MKC;
      case 'CDF':
        return MOCK_DEPARTURES_CDF;
      case 'EDB':
        return MOCK_DEPARTURES_EDB;
      default:
        return null;
    }
  }

  public getDeparturesAndArrivals(station: StationNameMap) {
    switch (station.crsCode) {
      case 'BHM':
        return MOCK_DEPARTURES_AND_ARRIVALS_BHM;
      case 'PAD':
        return MOCK_DEPARTURES_AND_ARRIVALS_PAD;
      case 'EUS':
        return MOCK_DEPARTURES_AND_ARRIVALS_EUS;
      case 'DBY':
        return MOCK_DEPARTURES_AND_ARRIVALS_DBY;
      case 'GLC':
        return MOCK_DEPARTURES_AND_ARRIVALS_GLC;
      case 'MKC':
        return MOCK_DEPARTURES_AND_ARRIVALS_MKC;
      case 'CDF':
        return MOCK_DEPARTURES_AND_ARRIVALS_CDF;
      case 'EDB':
        return MOCK_DEPARTURES_AND_ARRIVALS_EDB;
      default:
        return null;
    }
  }

  public getCRSOptions() {
    return MOCK_CRS_ALL;
  }

  public getBoardOptions() {
    return [
      BoardType.DEPARTURES_AND_ARRIVALS,
      BoardType.DEPARTURES,
      BoardType.ARRIVALS
    ];
  }
}
