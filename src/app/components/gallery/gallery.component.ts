import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable, of, switchMap} from 'rxjs';
import {ProjectsStore} from "../../shared/projects.store";
import {GalleryItem} from "../../shared/models/GalleryItem";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {
  @Input() showAllGalleryItems:boolean = true
  public projects$!: Observable<GalleryItem[]>
  constructor(
    private storage: ProjectsStore,
  ) {
    this.projects$ = this.storage.galleryItems
    .pipe(
      switchMap(data=> {
        if(this.showAllGalleryItems){
          return of(data)
        }
        return of([data[0],data[1], data[2]])
      }
      ))
  }

}
