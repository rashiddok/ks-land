import { Injectable } from '@angular/core';
import { GalleryItem } from './models/GalleryItem';
import { ProjectsService } from './projects.service';
import {BehaviorSubject, Observable, of, switchMap, tap} from "rxjs";
import {Project} from "./models/Project";

@Injectable({
  providedIn: 'root',
})
export class ProjectsStore {
  private _galleryItems: BehaviorSubject<GalleryItem[]> = new BehaviorSubject<
    GalleryItem[]
  >([]);
  private _projects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([])

  constructor(private projectsApi: ProjectsService) {
  }

  get galleryItems(): Observable<GalleryItem[]>{
    return this._galleryItems.pipe(
      switchMap(data=>{
        if(data.length > 0){
          return this._galleryItems
        }
        return this.projectsApi.getProjects().pipe(tap(fetched=>this._galleryItems.next(fetched)))
      })
    )
  }

  getProject(shortName: string): Observable<Project>{
    return this._projects.pipe(
      switchMap((projects) => {
        const project = projects.find(project=>project.shortTitle === shortName)
        console.log(this._projects.value)
        if(project){
          return of(project)
        }
        return this.projectsApi.getProjectByName(shortName).pipe(tap(data=>{
          this._projects.next([...this._projects.value, data])
        }))
      })
    );
  }
}
