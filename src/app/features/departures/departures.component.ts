import { Component, OnInit } from '@angular/core';
import {HuxleyTwoGetResponse} from "../../models/HuxleyTwoGetResponse";
import {MOCK_DEPARTURES_BHM} from "../../mocks/mock-departures-responces";

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.scss']
})
export class DeparturesComponent implements OnInit {

  public currentDepartures: HuxleyTwoGetResponse = MOCK_DEPARTURES_BHM;

  constructor() { }

  ngOnInit(): void {
  }

}
