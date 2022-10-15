import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceInformationComponent } from './features/service-information/service-information.component';
import { DeparturesAndArrivalsComponent } from './features/departures-and-arrivals/departures-and-arrivals.component';
import { DeparturesComponent } from './features/departures/departures.component';
import { ArrivalsComponent } from './features/arrivals/arrivals.component';
import { SearchComponent } from './features/search/search.component';
import { BoardPickerComponent } from './features/board-picker/board-picker.component';
import { StationPickerComponent } from './features/station-picker/station-picker.component';
import { NavBarComponent } from './features/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceInformationComponent,
    DeparturesAndArrivalsComponent,
    DeparturesComponent,
    ArrivalsComponent,
    SearchComponent,
    BoardPickerComponent,
    StationPickerComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
