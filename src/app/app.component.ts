import {Component, OnInit} from '@angular/core';
import {ApplicationSettingsService} from "./core/services/application-settings/application-settings.service";
import {ThemeType} from "./features/admin-menu/models/theme-type.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    "[class.theme-dark]": " (theme === 'dark')",
    "[class.theme-classic]": " (theme === 'classic')"
  }
})
export class AppComponent implements OnInit {
  public theme = ''

  constructor(private settings: ApplicationSettingsService) { }

  ngOnInit(): void {
    this.settings.subscribeToTheme(themeType => this.applyTheme(themeType));
  }

  private applyTheme(themeType: ThemeType): void {
    switch (themeType) {
      case ThemeType.CLASSIC:
        this.theme = 'classic';
        break;
      case ThemeType.DARK:
        this.theme = 'dark';
        break;
    }
  }
}
