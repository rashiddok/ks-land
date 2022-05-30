import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ProjectsService} from "../../shared/services/api/projects.service";
import {ModalModule} from "../../components/ui/modal";
import {ProjectsStorageService} from "../../shared/services/storage/projects-storage.service";
import {GalleryModule} from "../../components/gallery/gallery.module";
import {ImageLightboxModule} from "../../components/image-lightbox/image-lightbox.module";
import {ShareModule} from "../../components/share/share.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ProjectNavigationComponent} from "./project-navigation/project-navigation.component";

const routes: Routes = [{ path: '', component: ProjectComponent }];

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectNavigationComponent
  ],
  imports: [
    CommonModule,
    GalleryModule,
    ImageLightboxModule,
    FontAwesomeModule,
    ModalModule,
    ShareModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ProjectsStorageService,
    ProjectsService
  ]
})
export class ProjectModule { }
