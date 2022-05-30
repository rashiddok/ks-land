import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  faChevronLeft,
  faChevronRight,
  faGrip,
} from '@fortawesome/free-solid-svg-icons';
import { ProjectsStorageService } from '../../../shared/services/storage/projects-storage.service';

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
    private projectsStorage: ProjectsStorageService,
    private router: Router
  ) {}

  navigateNext() {
    this.navigate(1);
  }

  navigatePrev() {
    this.navigate(-1);
  }

  private navigate(navigateTo: 1 | -1) {
    const projects = this.projectsStorage.galleryItems.value;
    const foundProjectIndex = projects.findIndex(
      (v) => v.shortTitle === this.projectShortTitle
    );
    let navigateItemTitle =
      projects[foundProjectIndex + navigateTo]?.shortTitle;
    if (!navigateItemTitle) {
      navigateItemTitle =
        navigateTo === 1
          ? projects[0].shortTitle
          : projects[projects.length - 1].shortTitle;
    }
    window.scroll(0, 0);
    this.router.navigate(['projects', navigateItemTitle]);
  }
}
