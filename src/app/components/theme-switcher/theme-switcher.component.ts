import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  @Input() iconSize: SizeProp = 'lg'
  faTheme = faMoon
  activeTheme = 'light'
  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
  }

  switchTheme(){
    if(this.themeService.isDarkTheme()){
      this.themeService.setLightTheme()
      this.activeTheme = 'light'
      
      this.faTheme = faMoon
      return
    }
    this.themeService.setDarkTheme()
    this.activeTheme = 'dark'
    this.faTheme = faSun
  }

}
