import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ThemeService]
})
export class AppComponent {
  title = 'ks-land';
  constructor(private themeService: ThemeService){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if ((window.matchMedia('(prefers-color-scheme)').media !== 'not all') && prefersDark) {
      this.themeService.setDarkTheme()
    }
  }
}
