import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAbout } from 'src/app/models/IAbout';
import { environment } from 'src/environments/environment';

@Injectable()
export class AboutService {

  constructor(
    private http: HttpClient
  ) { }

  getAbout(): Observable<IAbout>{
    return this.http.get<IAbout>(`${environment.API_URL}/about`)
  }
}
