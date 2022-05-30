
import { BreakpointObserver } from '@angular/cdk/layout';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
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
