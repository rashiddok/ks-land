import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {ThemeService} from "./shared/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{
    provide: ThemeService,
    useClass: ThemeService,
    deps: [CookieService]
  }]
})
export class AppComponent {
  title = 'ks-land';
  constructor(private themeService: ThemeService){
    const cookie_theme_value = this.themeService.getCookieTheme()
    if(cookie_theme_value?.length>0){
      this.themeService.setThemeOnValue(cookie_theme_value)
      return
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if ((window.matchMedia('(prefers-color-scheme)').media !== 'not all') && prefersDark) {
      this.themeService.setDarkTheme()
    }
  }
}
