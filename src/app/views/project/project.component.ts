import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../shared/models/Project';
import { ProjectsService } from '../../shared/projects.service';
import { ModalService } from '../../components/ui/modal';
import { GalleryImage } from '../../shared/models/GalleryImage';
import { ProjectsStore } from '../../shared/projects.store';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projectShortName!: string;
  project!: Project;
  images: Required<GalleryImage>[] = [];
  currentImageIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    public modalService: ModalService,
    public projectStore: ProjectsStore
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params) => {
          this.projectShortName = params['project'];
          return params['project'];
        }),
        switchMap((projectName) => this.projectStore.getProject(projectName))
      )
      .subscribe((projectResponce) => {
        this.project = projectResponce;
        this.images = this.project.files.map(
          (v, i) =>
            new GalleryImage(v.image, v.cover, i) as Required<GalleryImage>
        );
      });
  }

  openImageLightbox(imageIndex: number) {
    this.currentImageIndex = imageIndex;
    this.modalService.open('lightbox-modal');
  }
}
