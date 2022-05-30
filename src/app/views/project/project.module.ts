import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProjectNavigationModule } from './project-navigation/project-navigation.module';
import {ProjectsService} from "../../shared/services/api/projects.service";
import {ModalModule} from "../../components/ui/modal";
import {ProjectsStorageService} from "../../shared/services/storage/projects-storage.service";
import {GalleryModule} from "../../components/gallery/gallery.module";
import {ImageLightboxModule} from "../../components/image-lightbox/image-lightbox.module";
import {ShareModule} from "../../components/share/share.module";

@NgModule({
  declarations: [
    ProjectComponent,
  ],
  imports: [
    CommonModule,
    GalleryModule,
    ProjectNavigationModule,
    ImageLightboxModule,
    ModalModule,
    ShareModule,
    RouterModule,
    HttpClientModule,
    ProjectRoutingModule
  ],
  providers: [
    ProjectsStorageService,
    ProjectsService
  ]
})
export class ProjectModule { }
