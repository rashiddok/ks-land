import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {LayoutModule} from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SocialsModule } from 'src/app/components/socials/socials.module';
import { ThemeSwitcherModule } from 'src/app/components/theme-switcher/theme-switcher.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FlexLayoutModule,
    LayoutModule,
    RouterModule,
    ThemeSwitcherModule,
    SocialsModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
