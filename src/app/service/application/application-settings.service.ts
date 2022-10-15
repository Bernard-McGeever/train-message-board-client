import { Injectable } from '@angular/core';
import {BehaviorSubject, Subscription} from "rxjs";
import {CRS} from "../../models/CRS";
import {BoardType} from "../../models/Board.enum";

@Injectable({
  providedIn: 'root'
})
export class ApplicationSettingsService {

  private stationSubject = new BehaviorSubject<CRS>({
    "stationName": "Birmingham New Street",
    "crsCode": "BHM"
  });

  private boardSubject = new BehaviorSubject<BoardType>(BoardType.DEPARTURES_AND_ARRIVALS);

  constructor() {
    this.subscribleToSettingChanges();
  }

  private subscribleToSettingChanges() {
    // this.currentStation;
    this.currentBoard;

    window.addEventListener('storage', (event: StorageEvent) => {
      // if (event.key === 'station') {
      //   this.setStation;
      // }
      if (event.key === 'board') {
        this.setBoard;
      }
    });
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

  public set currentBoard(board: BoardType) {
    if (this.boardSubject.value !== board) {
      this.boardSubject.next(board);
    }
    localStorage.setItem('board', board);
  }

  public subscribeToBoard(next: (boardType: BoardType) => void): Subscription {
    return this.boardSubject.subscribe(next);
  }

  private setBoard() {
    const boardString = localStorage.getItem('board');
    // @ts-ignore
    const board = boardString ? BoardType[boardString] : BoardType.DEPARTURES_AND_ARRIVALS;

    if (!this.boardSubject || this.boardSubject !== board) {
      this.boardSubject.next(board);
    }
  }
}
