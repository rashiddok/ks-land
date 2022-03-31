import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../models/Project';
import { AbstractProjectService } from '../services/api/projects.abstract-service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projectShortName!: string
  project!: Project
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectService: AbstractProjectService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.projectShortName = params['project']
      this.projectService.getProjectByName(this.projectShortName).subscribe(projectResponce=>{
        this.project = projectResponce
      })
    })
  }

}
