import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { AboutService } from '../services/api/about.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AboutRoutingModule
  ],
  providers: [{provide: AboutService, useClass: AboutService, deps: [HttpClient]}]
})
export class AboutModule { }
