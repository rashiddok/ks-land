import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import {ProjectsStorageService} from "../../shared/services/storage/projects-storage.service";
import {ProjectsService} from "../../shared/services/api/projects.service";

@NgModule({
  declarations: [
    GalleryComponent,
    GalleryItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [ProjectsStorageService,
    ProjectsService
  ],
  exports: [GalleryComponent]
})
export class GalleryModule { }
