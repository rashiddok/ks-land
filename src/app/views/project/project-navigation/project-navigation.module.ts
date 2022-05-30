import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectNavigationComponent } from './project-navigation.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ProjectsStorageService} from "../../../shared/services/storage/projects-storage.service";



@NgModule({
  declarations: [
    ProjectNavigationComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
  ],
  providers: [ProjectsStorageService],
  exports: [ProjectNavigationComponent]
})
export class ProjectNavigationModule { }
