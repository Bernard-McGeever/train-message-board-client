import {Component, OnInit} from '@angular/core';
import {ThemeType} from "./models/theme-type.enum";
import {ApplicationSettingsService} from "../../core/services/application-settings/application-settings.service";

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {
  public isAdminMenuShown: boolean = false;

  public currentTheme: ThemeType = ThemeType.CLASSIC;
  public themeType = ThemeType;

  constructor(private settings: ApplicationSettingsService) { }

  ngOnInit(): void {
    this.currentTheme = this.settings.currentTheme;
  }

  public onThemeClicked(theme: ThemeType) {
    this.currentTheme = theme;
    this.settings.currentTheme = this.currentTheme;

    this.hideAdminMenu();
  }

  public onAdminMenuClicked(event: MouseEvent) {
    event.stopPropagation();
    this.isAdminMenuShown = !this.isAdminMenuShown;
  }

  public hideAdminMenu() {
    this.isAdminMenuShown = false;
  }
}
