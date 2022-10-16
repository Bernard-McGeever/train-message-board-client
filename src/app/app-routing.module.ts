import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeparturesAndArrivalsComponent} from "./features/departures-and-arrivals/departures-and-arrivals.component";
import {DeparturesComponent} from "./features/departures/departures.component";
import {ArrivalsComponent} from "./features/arrivals/arrivals.component";

const routes: Routes = [
  { path: 'departures-and_arrivals', component: DeparturesAndArrivalsComponent },
  { path: 'departures', component: DeparturesComponent },
  { path: 'arrivals', component: ArrivalsComponent },
  { path: '', redirectTo: '/departures-and_arrivals', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
