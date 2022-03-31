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

const abstractProjectFactory = (http: HttpClient) => environment.APP_USE_API ? new ProjectsService(http) : new ProjectsMockService()

@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ProjectRoutingModule
  ],
  providers: [
    {
      provide: AbstractProjectService, 
      useFactory: abstractProjectFactory, 
      deps: [HttpClient]
    }
  ]
})
export class ProjectModule { }
