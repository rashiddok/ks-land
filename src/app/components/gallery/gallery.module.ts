import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GalleryComponent,
    GalleryItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [GalleryComponent]
})
export class GalleryModule { }
