import {Component, OnInit} from '@angular/core';
import {BoardType} from "./models/Board.enum";
import {HuxleyTwoService} from "../../service/huxley-two/huxley-two.service";
import {BasePickerComponent} from "../base/base-picker/base-picker.component";

@Component({
  selector: 'app-board-picker',
  templateUrl: './board-picker.component.html',
  styleUrls: ['./board-picker.component.scss']
})
export class BoardPickerComponent extends BasePickerComponent<BoardType> implements OnInit {

  public currentBoard: BoardType;

  constructor(_huxleyTwoService: HuxleyTwoService) {
    super(_huxleyTwoService);
  }

  ngOnInit() {
    this.populateOptions();
  }

  public onBoardOptionClicked(option: BoardType) {
    this.currentBoard = option;

    this.populateOptions();
    this.showHideOptions();
  }

  public convertBoardOptionToLink(option: BoardType): string {
    return '/' + option.toLowerCase().replace('_', '-');
  }

  populateOptions(): void {
    this.options = [
      BoardType.DEPARTURES_AND_ARRIVALS,
      BoardType.DEPARTURES,
      BoardType.ARRIVALS
    ];
  }
}
