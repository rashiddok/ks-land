import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { ProjectsStorageService } from 'src/app/services/storage/projects-storage.service';
import { AbstractProjectService } from 'src/app/services/api/projects.abstract-service';
import { ProjectsService } from 'src/app/services/api/projects.service';
import { ProjectsMockService } from 'src/app/services/api/projects-mock.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

const abstractProjectFactory = (http: HttpClient) => environment.APP_USE_API ? new ProjectsService(http) : new ProjectsMockService()

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
    {
      provide: AbstractProjectService, 
      useFactory: abstractProjectFactory, 
      deps: [HttpClient]
    }
  ],
  exports: [GalleryComponent]
})
export class GalleryModule { }
