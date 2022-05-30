import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { BehaviorSubject, Observable } from "rxjs";
import { dark, light, Theme } from "./helpers/theme";

@Injectable()

export class ThemeService {
  private active: BehaviorSubject<Theme> = new BehaviorSubject(light);
  private availableThemes: Theme[] = [light, dark];

  constructor(
    private cookie: CookieService
  ){

  }
  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active.value;
  }

  getActiveTheme$(): Observable<Theme> {
    return this.active.asObservable();
  }

  isDarkTheme(): boolean {
    return this.active.value.name === dark.name;
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  setThemeOnValue(themeName: string){
    if(themeName === dark.name){
      this.setDarkTheme()
      return
    }
    this.setLightTheme()
  }

  getCookieTheme(): string{
    return this.cookie.get('app_theme')
  }

  setActiveTheme(theme: Theme): void {
    this.active.next(theme);
    document.body.classList.value = 'theme_'+theme.name
    this.cookie.set('app_theme', theme.name)
    Object.keys(this.active.value.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.value.properties[property]
      );
    });
  }
}
