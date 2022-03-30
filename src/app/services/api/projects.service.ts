import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryItem } from 'src/app/models/GalleryItem';
import { AbstractProjectService } from './projects.abstract-service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService implements AbstractProjectService {

  constructor(
    private http: HttpClient
  ) { }

  getProjects(): Observable<GalleryItem[]>{
    return this.http.get<any>(``)
  }
}
