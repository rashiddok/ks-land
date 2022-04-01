import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectNavigationComponent } from './project-navigation.component';
import { RouterModule } from '@angular/router';
import { ProjectsStorageService } from 'src/app/services/storage/projects-storage.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



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
