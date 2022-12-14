import { Injectable } from '@angular/core';
import {BehaviorSubject, Subscription} from "rxjs";
import {ThemeType} from "../../../features/admin-menu/models/theme-type.enum";
import {CRS} from "../gateway/CrsApi/crs-api.service";

@Injectable({
  providedIn: 'root'
})
export class ApplicationSettingsService {

  // @ts-ignore
  private crsSubject = new BehaviorSubject<StationNameMap>(null);

  private themeSubject = new BehaviorSubject<ThemeType>(ThemeType.DARK);

  constructor() {
    this.subscribeToSettingChanges();
  }

  private subscribeToSettingChanges() {
    this.currentCRS;
    this.currentTheme;

    window.addEventListener('storage', (event: StorageEvent) => {
      if (event.key === 'crs') {
        this.setCRS();
      }
      if (event.key === 'theme') {
        this.setTheme();
      }
    });
  }

  public get currentCRS(): CRS {
    const crsString = localStorage.getItem('crs');
    const crs = !crsString ? new CRS() : CRS.fromJS(JSON.parse(crsString));

    if (!this.crsSubject.value || JSON.stringify(this.crsSubject.value.toJSON()) !== crsString) {
      this.crsSubject.next(crs);
    }
    return crs;
  }

  public get currentTheme(): ThemeType {
    let themeString = localStorage.getItem('theme');
    // @ts-ignore
    const theme = themeString ? ThemeType[localStorage.getItem('theme')] : ThemeType.LIGHT;

    if (!this.themeSubject.value || this.themeSubject.value !== theme) {
      this.themeSubject.next(theme);
    }

    if (!themeString) {
      localStorage.setItem('theme', theme);
    }

    if (!this.themeSubject || this.themeSubject !== theme) {
      this.themeSubject.next(theme);
    }

    return theme;
  }

  public set currentCRS(crs: CRS) {
    if (this.crsSubject.value !== crs) {
      const updatedCRS = new CRS();
      updatedCRS.init(crs);

      this.crsSubject.next(updatedCRS);
    }
    localStorage.setItem('crs', JSON.stringify(crs.toJSON()));
  }

  public set currentTheme(theme: ThemeType) {
    if (this.themeSubject.value !== theme) {
      this.themeSubject.next(theme);
    }
    localStorage.setItem('theme', theme);
  }

  private setTheme() {
    const themeString = localStorage.getItem('theme');
    // @ts-ignore
    const theme = themeString ? ThemeType[themeString] : ThemeType.LIGHT;

    if (!this.themeSubject || this.themeSubject !== theme) {
      this.themeSubject.next(theme);
    }
  }

  public subscribeToCRS(next: (crs: CRS) => void): Subscription {
    return this.crsSubject.subscribe(next);
  }

  public subscribeToTheme(next: (themeType: ThemeType) => void): Subscription {
    return this.themeSubject.subscribe(next);
  }

  private setCRS(): void {
    const crsString = localStorage.getItem('crs');
    const crs = !crsString ? new CRS() : CRS.fromJS(JSON.parse(crsString));
    if (!this.crsSubject.value || this.crsSubject.value !== crs) {
      this.crsSubject.next(crs);
    }
  }
}
