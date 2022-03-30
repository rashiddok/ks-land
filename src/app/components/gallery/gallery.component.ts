import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryItem } from 'src/app/models/GalleryItem';
import { ProjectsStorageService } from 'src/app/services/storage/projects-storage.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public projects$!: Observable<GalleryItem[]>
  constructor(
    private storage: ProjectsStorageService
  ) {
    this.projects$ = this.storage.galleryItems.value$
  }

  ngOnInit(): void {
    this.storage.requestPageData()
  }

}
