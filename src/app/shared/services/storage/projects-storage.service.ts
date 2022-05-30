import { Injectable } from '@angular/core';
import {GalleryItem} from "../../models/GalleryItem";
import {BehaviorSubjectItem} from "../../helpers/BehaviourSubjectItem";
import {ProjectsService} from "../api/projects.service";

@Injectable()
export class ProjectsStorageService {

  galleryItems: BehaviorSubjectItem<GalleryItem[]> = new BehaviorSubjectItem<GalleryItem[]>([])
  constructor(
    private projectsApi: ProjectsService
  ) { }

  requestPageData(){
    if(this.galleryItems.value.length > 0){
      return
    }
    this.projectsApi.getProjects().subscribe(data=>{
      this.galleryItems.value = data
      console.log(data)
    })
  }
}
