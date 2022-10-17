import {Component, OnInit} from '@angular/core';
import {BoardType} from "../../models/Board.enum";
import {ApplicationSettingsService} from "../../core/services/application-settings/application-settings.service";
import {HuxleyTwoService} from "../../service/huxley-two/huxley-two.service";

@Component({
  selector: 'app-board-picker',
  templateUrl: './board-picker.component.html',
  styleUrls: ['./board-picker.component.scss']
})
export class BoardPickerComponent implements OnInit {
  public boardOptions: BoardType[] | undefined = undefined;
  public dropDownIsShown: boolean = false;

  public currentBoard: BoardType = BoardType.DEPARTURES_AND_ARRIVALS;

  constructor(private settings: ApplicationSettingsService, private huxleyTwoService: HuxleyTwoService) {}

  ngOnInit(): void {
    this.currentBoard = this.settings.currentBoard;
    this.populateBoardOptions();
  }

  public onBoardOptionClicked(option: BoardType) {
    this.currentBoard = option;
    this.settings.currentBoard = this.currentBoard;
    this.populateBoardOptions();
    this.showHideBoardOptions();
  }

  public showHideBoardOptions(): void {
    this.dropDownIsShown = !this.dropDownIsShown;
  }

  public convertBoardOptionToLink(option: BoardType): string {
    const link = '/' + option.toLowerCase().replace('_', '-');
    console.log(link)
    return '/' + option.toLowerCase().replace('_', '-');
  }

  private populateBoardOptions(): void {
    this.boardOptions = this.huxleyTwoService.getBoardOptions().filter(board => board !== this.currentBoard);
  }
}
