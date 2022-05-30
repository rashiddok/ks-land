import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Project} from "../../shared/models/Project";
import {ProjectsService} from "../../shared/services/api/projects.service";
import {ModalService} from "../../components/ui/modal";
import {GalleryImage} from "../../shared/models/GalleryImage";



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewInit {
  projectShortName!: string
  project!: Project
  images: Required<GalleryImage>[] = []
  currentImageIndex: number = 0

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectsService,
    public modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.projectShortName = params['project']
      this.projectService.getProjectByName(this.projectShortName).subscribe(projectResponce=>{
        this.project = projectResponce
        this.images = this.project.files.map((v, i)=>new GalleryImage(v.image, v.cover, i) as Required<GalleryImage>)
      })
    })
  }

  ngAfterViewInit(): void {}

  openImageLightbox(imageIndex: number){
    this.currentImageIndex = imageIndex
    this.modalService.open('lightbox-modal')
  }

}
