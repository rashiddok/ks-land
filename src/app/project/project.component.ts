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
      })
    })
  }

  ngAfterViewInit(): void {
    // this.setImageGrid()
  }
  // setImageGrid(){
  //   const gridElements = document.querySelectorAll('.project-item')
  //   for (let index = 0; index < gridElements.length; index++) {
  //     const element = gridElements[index];
  //     const nextElement = gridElements[index+1]
  //     const widthHeightRatio = element.clientWidth/element.clientHeight
  //     let nextElementRatio: number = 1.5
  //     if(nextElement){
  //       nextElementRatio = nextElement.clientWidth/nextElement.clientHeight
  //     }

  //     if(widthHeightRatio <= 1.2 && nextElementRatio <= 1.2){
  //       element.classList.add('project-item__left', 'item__aligned')
  //       nextElement.classList.add('project-item__right', 'item__aligned');
  //       index++;
  //       // return
  //     }
  //     else if(widthHeightRatio <= 1.2){
  //       element.classList.add('project-item__center', 'item__aligned')
  //     } else{
  //       element.classList.add('project-item__full', 'item__aligned')
  //     }
  //   }
  // }

  openImageLightbox(imageIndex: number){
    this.imageLightbox.openModal(imageIndex)
  }

}
