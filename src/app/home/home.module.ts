import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GalleryModule } from '../components/gallery/gallery.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    GalleryModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
