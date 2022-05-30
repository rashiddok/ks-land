import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GalleryItem} from "../../../shared/models/GalleryItem";

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryItemComponent implements OnInit {
  @Input() item!: GalleryItem
  constructor() { }

  ngOnInit(): void {
  }

}
