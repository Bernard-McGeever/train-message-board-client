import { Component, OnInit } from '@angular/core';
import {HuxleyTwoGetResponse} from "../../models/HuxleyTwoGetResponse";
import {MOCK_ARRIVALS_BHM} from "../../mocks/mock-arrivals-responces";

@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.scss']
})
export class ArrivalsComponent implements OnInit {

  public currentArrivals: HuxleyTwoGetResponse = MOCK_ARRIVALS_BHM;

  constructor() { }

  ngOnInit(): void {
  }

}
