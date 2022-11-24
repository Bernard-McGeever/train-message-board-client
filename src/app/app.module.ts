import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeparturesAndArrivalsComponent } from './features/departures-and-arrivals/departures-and-arrivals.component';
import { DeparturesComponent } from './features/departures/departures.component';
import { ArrivalsComponent } from './features/arrivals/arrivals.component';
import { SearchComponent } from './features/search/search.component';
import { BoardPickerComponent } from './features/board-picker/board-picker.component';
import { StationPickerComponent } from './features/station-picker/station-picker.component';
import { MoreServiceInformationComponent } from './features/more-service-information/more-service-information.component';
import { FutureStationScrollComponent } from './features/future-station-scroll/future-station-scroll.component';
import { AdminMenuComponent } from './features/admin-menu/admin-menu.component';
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {TitleCasePipe} from "@angular/common";
import { LowerCamelToUpperPipe } from './pipes/lower-camel-to-title/lower-camel-to-upper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DeparturesAndArrivalsComponent,
    DeparturesComponent,
    ArrivalsComponent,
    SearchComponent,
    BoardPickerComponent,
    StationPickerComponent,
    MoreServiceInformationComponent,
    FutureStationScrollComponent,
    AdminMenuComponent,
    LowerCamelToUpperPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
