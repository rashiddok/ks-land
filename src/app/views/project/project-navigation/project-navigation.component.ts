import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronLeft, faChevronRight, faGrip } from '@fortawesome/free-solid-svg-icons';
import {ProjectsStorageService} from "../../../shared/services/storage/projects-storage.service";

@Component({
  selector: 'app-project-navigation',
  templateUrl: './project-navigation.component.html',
  styleUrls: ['./project-navigation.component.scss']
})
export class ProjectNavigationComponent implements OnInit {
  @Input() projectShortTitle!: string
  faChevronLeft = faChevronLeft
  faChevronRight = faChevronRight
  faGrip = faGrip
  constructor(
    private projectsStorage: ProjectsStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateNext(){
    this.navigate(1)
  }

  navigatePrev(){
    this.navigate(-1)
  }

  private navigate(navigateTo: 1 | -1){
    const projects = this.projectsStorage.galleryItems.value
    const foundProjectIndex = projects.findIndex(v=>v.shortTitle === this.projectShortTitle)
    let navigateItemTitle = projects[foundProjectIndex + navigateTo]?.shortTitle
    if(!navigateItemTitle){
      navigateItemTitle = navigateTo === 1 ? projects[0].shortTitle : projects[projects.length-1].shortTitle
    }
    window.scroll(0, 0)
    this.router.navigate(['projects', navigateItemTitle])
  }

}
