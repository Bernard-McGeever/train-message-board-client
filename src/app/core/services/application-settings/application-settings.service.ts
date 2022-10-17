import { Injectable } from '@angular/core';
import {BehaviorSubject, Subscription} from "rxjs";
import {StationNameMap} from "../../../models/CRS";
import {BoardType} from "../../../models/Board.enum";

@Injectable({
  providedIn: 'root'
})
export class ApplicationSettingsService {

  // @ts-ignore
  private crsSubject = new BehaviorSubject<StationNameMap>(null);

  private boardSubject = new BehaviorSubject<BoardType>(BoardType.DEPARTURES_AND_ARRIVALS);

  constructor() {
    this.subscribeToSettingChanges();
  }

  private subscribeToSettingChanges() {
    this.currentCRS;
    this.currentBoard;

    window.addEventListener('storage', (event: StorageEvent) => {
      if (event.key === 'crs') {
        this.setCRS();
      }
      if (event.key === 'board') {
        this.setBoard;
      }
    });
  }

  public get currentCRS(): StationNameMap {
    const crsString = localStorage.getItem('crs');
    const crs = !crsString ? new StationNameMap() : StationNameMap.fromJS(JSON.parse(crsString));

    if (!this.crsSubject.value || JSON.stringify(this.crsSubject.value.toJSON()) !== crsString) {
      this.crsSubject.next(crs);
    }
    return crs;
  }

  public get currentBoard(): BoardType {
    let boardString = localStorage.getItem('board');
    // @ts-ignore
    const board = boardString ? BoardType[localStorage.getItem('board')] : BoardType.DEPARTURES_AND_ARRIVALS;

    if (!boardString) {
      localStorage.setItem('board', board);
    }

    if (!this.boardSubject.value || this.boardSubject.value !== board) {
      this.boardSubject.next(board);
    }
    return board;
  }

  public set currentCRS(crs: StationNameMap) {
    if (this.crsSubject.value !== crs) {
      const updatedCRS = new StationNameMap();
      updatedCRS.init(crs);

      this.crsSubject.next(updatedCRS);
    }
    localStorage.setItem('crs', JSON.stringify(crs.toJSON()));
  }

  public set currentBoard(board: BoardType) {
    if (this.boardSubject.value !== board) {
      this.boardSubject.next(board);
    }
    localStorage.setItem('board', board);
  }

  public subscribeToCRS(next: (crs: StationNameMap) => void): Subscription {
    return this.crsSubject.subscribe(next);
  }

  public subscribeToBoard(next: (boardType: BoardType) => void): Subscription {
    return this.boardSubject.subscribe(next);
  }

  private setCRS(): void {
    const crsString = localStorage.getItem('crs');
    const crs = !crsString ? new StationNameMap() : StationNameMap.fromJS(JSON.parse(crsString));
    if (!this.crsSubject.value || this.crsSubject.value !== crs) {
      this.crsSubject.next(crs);
    }
  }

  private setBoard(): void {
    const boardString = localStorage.getItem('board');
    // @ts-ignore
    const board = boardString ? BoardType[boardString] : BoardType.DEPARTURES_AND_ARRIVALS;

    if (!this.boardSubject || this.boardSubject !== board) {
      this.boardSubject.next(board);
    }
  }
}
