import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {faChevronCircleLeft, faChevronCircleRight, faXmark} from '@fortawesome/free-solid-svg-icons';
import {GalleryImage} from "../../shared/models/GalleryImage";

@Component({
  selector: 'app-image-lightbox',
  templateUrl: './image-lightbox.component.html',
  styleUrls: ['./image-lightbox.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageLightboxComponent  {

  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>()
  @Input() images!: GalleryImage[]
  faChevronNext = faChevronCircleRight
  faChevronPrev = faChevronCircleLeft
  faXmark = faXmark
  private _slideIndex: number = 0;
  get slideIndex(): number{
    return this._slideIndex;
  }
  @Input() set slideIndex(n: number){
    const foundImage = this.images.find(v=>v.id === n)
    if(!foundImage){
      return
    }
    this._slideIndex = n
  }

  constructor() { }

  openModal(imageId: number) {
    this.currentSlide(imageId)
  }

   plusSlides(n: number) {
    this.slideIndex += n
  }

   private currentSlide(index: number) {
    this.slideIndex = index
  }

}
