import {Component} from '@angular/core';
import {BoardType} from "../../models/Board.enum";
import {HuxleyTwoService} from "../../service/huxley-two/huxley-two.service";
import {BasePickerComponent} from "../base/base-picker/base-picker.component";

@Component({
  selector: 'app-board-picker',
  templateUrl: './board-picker.component.html',
  styleUrls: ['./board-picker.component.scss']
})
export class BoardPickerComponent extends BasePickerComponent<BoardType> {

  public currentBoard: BoardType = BoardType.DEPARTURES_AND_ARRIVALS;

  constructor(_huxleyTwoService: HuxleyTwoService) {
    super(_huxleyTwoService);
  }

  public onBoardOptionClicked(option: BoardType) {
    this.currentBoard = option;

    this.populateOptions();
    this.showHideOptions();
  }

  public convertBoardOptionToLink(option: BoardType): string {
    const link = '/' + option.toLowerCase().replace('_', '-');
    console.log(link)
    return '/' + option.toLowerCase().replace('_', '-');
  }

  populateOptions(): void {
    this.options = this.huxleyTwoService.getBoardOptions().filter(board => board !== this.currentBoard);
  }
}
