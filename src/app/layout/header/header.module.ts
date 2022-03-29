import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {LayoutModule} from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FlexLayoutModule,
    LayoutModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
