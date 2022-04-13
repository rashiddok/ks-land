import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { dark, light, Theme } from "../helpers/theme";

@Injectable()

export class ThemeService {
  private active: Theme = light;
  private availableThemes: Theme[] = [light, dark];

  constructor(
    private cookie: CookieService
  ){

  }
  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  isDarkTheme(): boolean {
    return this.active.name === dark.name;
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
    this.active = theme;
    this.cookie.set('app_theme', theme.name)
    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}