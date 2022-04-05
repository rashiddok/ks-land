import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageLightboxComponent } from '../components/image-lightbox/image-lightbox.component';
import { Project } from '../models/Project';
import { AbstractProjectService } from '../services/api/projects.abstract-service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewInit {
  projectShortName!: string
  project!: Project
  images: string[] = []
  @ViewChild('imageLightbox') imageLightbox!: ImageLightboxComponent;
  constructor(
    private route: ActivatedRoute,
    private projectService: AbstractProjectService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.projectShortName = params['project']
      this.projectService.getProjectByName(this.projectShortName).subscribe(projectResponce=>{
        this.project = projectResponce
        this.images = this.project.files.map(v=>v.image)
      })
    })
  }

  ngAfterViewInit(): void {}

  openImageLightbox(imageIndex: number){
    
    this.imageLightbox.openModal(imageIndex)
  }

}
