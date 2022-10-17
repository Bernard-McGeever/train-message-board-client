import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public selectedServiceId: string | null = null;

  public setSelectedServiceId(serviceId: string) {
    this.selectedServiceId = serviceId;
  }
}
