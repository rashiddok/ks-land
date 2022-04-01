import { Component, Input, OnInit } from '@angular/core';
import { faChevronCircleLeft, faChevronCircleRight, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-lightbox',
  templateUrl: './image-lightbox.component.html',
  styleUrls: ['./image-lightbox.component.scss']
})
export class ImageLightboxComponent implements OnInit {

  @Input() images!: string[]
  faChevronNext = faChevronCircleRight
  faChevronPrev = faChevronCircleLeft
  faXmark = faXmark
  slideIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  loadImages(): void {
  }
  
  openModal(imageIndex: number) {
    const el: HTMLElement = document.querySelector('#imgModal') as HTMLElement
    el.style.display = "block";
    this.currentSlide(imageIndex)
  }

  closeModal() {
    const el: HTMLElement =document.getElementById('imgModal') as HTMLElement
    el.style.display = "none";
  }


   plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

   private currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

   showSlides(n: number) {
    const slides = document.getElementsByClassName("lightbox-slide") as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[this.slideIndex-1].style.display = "block";
  }

}
