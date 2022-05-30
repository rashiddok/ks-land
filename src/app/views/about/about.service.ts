import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {IAbout} from "../../shared/models/IAbout";

@Injectable()
export class AboutService {

  constructor(
    private http: HttpClient
  ) { }

  getAbout(): Observable<IAbout>{
    return this.http.get<IAbout>(`${environment.API_URL}/about`)
  }
}
