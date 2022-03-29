import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ShareComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [ShareComponent]
})
export class ShareModule { }
