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
import { NavBarComponent } from './features/nav-bar/nav-bar.component';
import { MoreServiceInformationComponent } from './features/more-service-information/more-service-information.component';
import { FutureStationScrollComponent } from './features/future-station-scroll/future-station-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    DeparturesAndArrivalsComponent,
    DeparturesComponent,
    ArrivalsComponent,
    SearchComponent,
    BoardPickerComponent,
    StationPickerComponent,
    NavBarComponent,
    MoreServiceInformationComponent,
    FutureStationScrollComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
