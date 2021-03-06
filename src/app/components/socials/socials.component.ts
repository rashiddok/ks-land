import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faBehance, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {

  @Input() iconSize: SizeProp = 'lg'
  @Input() iconSpacing: string = 'small'
  faInstagram = faInstagram
  faBehance = faBehance
  faLinkedin = faLinkedin
  constructor() { }

  ngOnInit(): void {
  }

}
