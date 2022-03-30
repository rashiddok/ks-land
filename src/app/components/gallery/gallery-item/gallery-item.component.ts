import { Component, Input, OnInit } from '@angular/core';
import { GalleryItem } from 'src/app/models/GalleryItem';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {
  @Input() item!: GalleryItem
  constructor() { }

  ngOnInit(): void {
  }

}
