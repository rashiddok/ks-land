import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { GalleryItem } from 'src/app/models/GalleryItem';
import { ProjectsStorageService } from 'src/app/services/storage/projects-storage.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() showAllGalleryItems:boolean = true
  public projects$!: Observable<GalleryItem[]>
  constructor(
    private storage: ProjectsStorageService
  ) {
    this.projects$ = this.storage.galleryItems.value$
    .pipe(
      switchMap(data=> {
        if(this.showAllGalleryItems){
          return of(data)
        }
        return of([data[0],data[1], data[3]])
      }
      ))
  }

  ngOnInit(): void {
    this.storage.requestPageData()
  }

}
