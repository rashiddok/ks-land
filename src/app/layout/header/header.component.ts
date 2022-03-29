
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { faBehance, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faInstagram = faInstagram
  faBehance = faBehance
  faLinkedin = faLinkedin
  faBars = faBars
  faXmark = faXmark
  isMenuToggled: boolean = false
  isDesktop: boolean = false
  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    const layoutChanges = this.breakpointObserver.observe('(min-width: 767px)')
    layoutChanges.subscribe(result=>{
      this.isDesktop = result.matches
    })
  }

  toggleMenu(){
    this.isMenuToggled = !this.isMenuToggled
    document.querySelector('.header__toggler')?.classList.add('fadein')
    setTimeout(() => {
      document.querySelector('.header__toggler')?.classList.remove('fadein')
    }, 200);
    
  }

}
