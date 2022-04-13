import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-switcher.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThemeService } from 'src/app/services/theme.service';
import { CookieService } from 'ngx-cookie-service';



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
