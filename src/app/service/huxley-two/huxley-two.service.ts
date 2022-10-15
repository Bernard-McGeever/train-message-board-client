import {Injectable} from '@angular/core';
import {MOCK_CRS_ALL} from "../../mocks/mock-crs-responces";
import {BoardType} from "../../models/Board.enum";

@Injectable({
  providedIn: 'root'
})
export class HuxleyTwoService {

  constructor() { }

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
