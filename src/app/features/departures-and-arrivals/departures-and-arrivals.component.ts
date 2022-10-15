import { Component, OnInit } from '@angular/core';
import { HuxleyTwoGetResponse } from "../../models/HuxleyTwoGetResponse";
import { MOCK_DEPARTURES_AND_ARRIVALS_BHM } from "../../mocks/mock-departures-and-arrivals-responces";

@Component({
  selector: 'app-departures-and-arrivals',
  templateUrl: './departures-and-arrivals.component.html',
  styleUrls: ['./departures-and-arrivals.component.scss']
})
export class DeparturesAndArrivalsComponent implements OnInit {

  public currentArrivalsAndDepartures: HuxleyTwoGetResponse = MOCK_DEPARTURES_AND_ARRIVALS_BHM;

  constructor() { }

  ngOnInit(): void {
  }

}
