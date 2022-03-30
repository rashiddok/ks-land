import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareDialogComponent } from './share-dialog/share-dialog.component';



@NgModule({
  declarations: [
    ShareComponent,
    ShareDialogComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [ShareComponent]
})
export class ShareModule { }
