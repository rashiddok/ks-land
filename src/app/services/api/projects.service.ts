import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GalleryImage } from 'src/app/models/GalleryImage';
import { GalleryItem } from 'src/app/models/GalleryItem';
import { Project } from 'src/app/models/Project';
import { environment } from 'src/environments/environment';
import { AbstractProjectService } from './projects.abstract-service';

@Injectable()
export class ProjectsService implements AbstractProjectService {

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
