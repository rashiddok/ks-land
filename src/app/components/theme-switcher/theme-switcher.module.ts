import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-switcher.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CookieService } from 'ngx-cookie-service';
import {ThemeService} from "../../shared/services/theme.service";



@NgModule({
  declarations: [
    ThemeSwitcherComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  providers: [{
    provide: ThemeService,
    useClass: ThemeService,
    deps: [CookieService]
  }],
  exports: [ThemeSwitcherComponent]
})
export class ThemeSwitcherModule { }
