import { Injectable } from '@angular/core';
import { BehaviorSubjectItem } from 'src/app/helpers/BehaviourSubjectItem';
import { GalleryItem } from 'src/app/models/GalleryItem';
import { AbstractProjectService } from '../api/projects.abstract-service';

@Injectable()
export class ProjectsStorageService {

  galleryItems: BehaviorSubjectItem<GalleryItem[]> = new BehaviorSubjectItem<GalleryItem[]>([])
  constructor(
    private projectsApi: AbstractProjectService
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
