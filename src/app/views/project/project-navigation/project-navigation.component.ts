import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  faChevronLeft,
  faChevronRight,
  faGrip,
} from '@fortawesome/free-solid-svg-icons';
import { ProjectsStore } from '../../../shared/projects.store';
import {findIndex, map, mergeMap, tap} from "rxjs";
import {GalleryItem} from "../../../shared/models/GalleryItem";

@Component({
  selector: 'app-project-navigation',
  template: ` <div class="project__navigation">
    <button class="navigation navigation-prev" (click)="navigatePrev()">
      <fa-icon [icon]="faChevronLeft"></fa-icon>
    </button>
    <button class="navigation" [routerLink]="['', 'projects']">
      <fa-icon [icon]="faGrip"></fa-icon>
    </button>
    <button class="navigation navigation-next" (click)="navigateNext()">
      <fa-icon [icon]="faChevronRight"></fa-icon>
    </button>
  </div>`,
  styleUrls: ['./project-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectNavigationComponent {
  @Input() projectShortTitle!: string;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faGrip = faGrip;
  constructor(
    private projectsStorage: ProjectsStore,
    private router: Router
  ) {}

  navigateNext() {
    this.navigate(1);
  }

  navigatePrev() {
    this.navigate(-1);
  }

  private navigate(navigateTo: 1 | -1) {
    //TODO: REWORK
    this.projectsStorage.galleryItems.pipe(
      map((data)=>{
        const itemIndex = data.findIndex(v=>v.shortTitle === this.projectShortTitle)
        return {data, itemIndex}
      }),
      tap(({data, itemIndex})=>{
        let navigateItemTitle =
          data[itemIndex+navigateTo]?.shortTitle;
        if (!navigateItemTitle) {
          navigateItemTitle =
            navigateTo === 1
              ? data[0].shortTitle
              : data[data.length - 1].shortTitle;
        }
        window.scroll(0, 0);
        this.router.navigate(['projects', navigateItemTitle]);
      })
    )
  }
}
