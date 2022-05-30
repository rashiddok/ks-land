import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Project} from "../../models/Project";
import {GalleryItem} from "../../models/GalleryItem";
import {GalleryImage} from "../../models/GalleryImage";

@Injectable()
export class ProjectsService{

  constructor(
    private http: HttpClient
  ) { }

  getProjects(): Observable<GalleryItem[]>{
    return this.http.get<any>(`${environment.API_URL}/projects`)
  }

  public getProjectByName(shortName: string): Observable<Project> {
    return this.http.get<Project>(`${environment.API_URL}/projects/${shortName}`).pipe(
      map(project=>{
        const files: string[] = JSON.parse(`${project.files}`)
        project.files = files.map(image=>new GalleryImage(image.replace('_cover', ''), image))
        return project
      })
    )
  }
}
