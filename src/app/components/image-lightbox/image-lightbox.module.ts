import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageLightboxComponent } from './image-lightbox.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ImageLightboxComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ImageLightboxComponent]
})
export class ImageLightboxModule { }
