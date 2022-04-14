import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  @Input() iconSize: SizeProp = 'lg'
  faTheme = faMoon
  constructor(
    private themeService: ThemeService
  ) {
    this.themeService.getActiveTheme$().subscribe(theme=>{
      if(this.themeService.isDarkTheme()){
        this.faTheme = faMoon
        return
      }
      this.faTheme = faSun
    })
  }

  ngOnInit(): void {
  }

  switchTheme(){
    if(this.themeService.isDarkTheme()){
      this.themeService.setLightTheme()
      return
    }
    this.themeService.setDarkTheme()
  }

}
