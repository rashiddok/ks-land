import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailMessage } from 'src/app/models/EmailMessage';
import { environment } from 'src/environments/environment';

@Injectable()
export class SendmailService {

  constructor(
    private http: HttpClient
  ) { }

  public sendEmail(body: EmailMessage): Observable<any>{
    return this.http.post(`${environment.API_URL}/mail`,body)
  }
}
