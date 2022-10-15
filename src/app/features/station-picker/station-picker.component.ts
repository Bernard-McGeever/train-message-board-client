import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-station-picker',
  templateUrl: './station-picker.component.html',
  styleUrls: ['./station-picker.component.scss']
})
export class StationPickerComponent implements OnInit {

  public currentStation: string = 'HAYES AND HARLINGTON';

  constructor() { }

  ngOnInit(): void {
  }

}
