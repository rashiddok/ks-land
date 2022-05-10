import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageLightboxComponent } from '../components/image-lightbox/image-lightbox.component';
import { GalleryImage } from '../models/GalleryImage';
import { GalleryItem } from '../models/GalleryItem';
import { Project } from '../models/Project';
import { AbstractProjectService } from '../services/api/projects.abstract-service';
import {ModalService} from "../components/ui/modal";



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
    private projectService: AbstractProjectService,
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
