import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareDialogComponent } from './share-dialog/share-dialog.component';
import {ModalModule} from "../ui/modal";

@NgModule({
  declarations: [
    ShareComponent,
    ShareDialogComponent,
  ],
  imports: [
    CommonModule,
    ModalModule,
    FontAwesomeModule,
  ],
  exports: [ShareComponent]
})
export class ShareModule { }
