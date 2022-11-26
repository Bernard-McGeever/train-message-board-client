import {Component, OnInit} from '@angular/core';
import {BoardType} from "./models/Board.enum";
import {HuxleyTwoService} from "../../service/huxley-two/huxley-two.service";
import {BasePickerComponent} from "../base/base-picker/base-picker.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-board-picker',
  templateUrl: './board-picker.component.html',
  styleUrls: ['./board-picker.component.scss']
})
export class BoardPickerComponent extends BasePickerComponent<BoardType> implements OnInit {

  public currentBoard: BoardType;

  constructor(_huxleyTwoService: HuxleyTwoService, private router: Router) {
    super(_huxleyTwoService);
  }

  ngOnInit() {
    this.currentBoard = this.convertStringToBoardOption(this.router.url.slice(1));
    this.populateOptions();
  }

  public onBoardNavigationChange(selectedBoard) {
    this.router.navigate([this.convertBoardOptionToLink(this.convertStringToBoardOption(selectedBoard.value))]);
  }

  public convertBoardOptionToLink(option: BoardType): string {
    return '/' + option.toLowerCase().replace(/ /g, '-');
  }

  public convertStringToBoardOption(string: string): BoardType {
    return BoardType[string.replace(/ /g, '_').toUpperCase()];
  }

  populateOptions(): void {
    this.options = [
      BoardType.DEPARTURES_AND_ARRIVALS,
      BoardType.DEPARTURES,
      BoardType.ARRIVALS
    ];
  }
}
