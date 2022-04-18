import { Component, OnInit } from '@angular/core';
import { IAbout } from '../models/IAbout';
import { AboutService } from '../services/api/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public aboutData!: IAbout
  constructor(
    private aboutService: AboutService
  ) { }

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe(res=>{
      console.log(res)
      this.aboutData = res
    })
  }

}
