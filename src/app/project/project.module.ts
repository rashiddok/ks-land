import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProjectsService } from '../services/api/projects.service';
import { ProjectsMockService } from '../services/api/projects-mock.service';
import { AbstractProjectService } from '../services/api/projects.abstract-service';
import { GalleryModule } from '../components/gallery/gallery.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectsStorageService } from '../services/storage/projects-storage.service';
import { ProjectNavigationModule } from './project-navigation/project-navigation.module';
import { ShareModule } from '../components/share/share.module';
import { ImageLightboxModule } from '../components/image-lightbox/image-lightbox.module';
import { LazyImageLoadingDirective } from '../helpers/lazy-image.directive';
import {ModalModule} from "../components/ui/modal";

const abstractProjectFactory = (http: HttpClient) => environment.APP_USE_API ? new ProjectsService(http) : new ProjectsMockService()

@NgModule({
  declarations: [
    ProjectComponent,
    LazyImageLoadingDirective
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
    {
      provide: AbstractProjectService,
      useFactory: abstractProjectFactory,
      deps: [HttpClient]
    }
  ]
})
export class ProjectModule { }
