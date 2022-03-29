import { Component, OnInit } from '@angular/core';
import { faBehance, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faInstagram = faInstagram
  faBehance = faBehance
  faLinkedin = faLinkedin
  constructor() { }

  ngOnInit(): void {
  }

}
