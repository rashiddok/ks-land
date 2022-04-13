import { Component, Input, OnInit } from '@angular/core';
import { faChevronCircleLeft, faChevronCircleRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { GalleryImage } from 'src/app/models/GalleryImage';

@Component({
  selector: 'app-image-lightbox',
  templateUrl: './image-lightbox.component.html',
  styleUrls: ['./image-lightbox.component.scss']
})
export class ImageLightboxComponent  {

  @Input() images!: GalleryImage[]
  faChevronNext = faChevronCircleRight
  faChevronPrev = faChevronCircleLeft
  faXmark = faXmark
  private _slideIndex: number = 0;
  get slideIndex(): number{
    return this._slideIndex;
  }
  set slideIndex(n: number){
    const foundImage = this.images.find(v=>v.id === n)
    if(!foundImage){
      return
    }
    this._slideIndex = n
  }
  showModal: boolean = false

  constructor() { }
  
  openModal(imageId: number) {
    this.showModal = true
    this.currentSlide(imageId)
  }

  closeModal() {
    this.showModal = false
  }


   plusSlides(n: number) {
    this.slideIndex += n
  }

   private currentSlide(index: number) {
    this.slideIndex = index
  }

}
