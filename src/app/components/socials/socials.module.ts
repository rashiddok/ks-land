import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from './socials.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    SocialsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [SocialsComponent]
})
export class SocialsModule { }
