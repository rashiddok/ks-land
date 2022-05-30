import {
  Component,
  OnInit,
  Self,
} from '@angular/core';
import { AboutService } from './about.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  template: ` <div class="about container">
    <img [src]="image" alt="" class="about__photo" />
    <div class="about__text" [innerHTML]="text"></div>
  </div>`,
  styleUrls: ['./about.component.scss'],
  providers: [AboutService],
})
export class AboutComponent implements OnInit {
  image!: string | null;
  text!: string | null;
  constructor(
    @Self() private aboutService: AboutService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe((res) => {
      this.image = this.sanitizer.sanitize(4, res.photo);
      this.text = this.sanitizer.sanitize(1, res.text);
    });
  }
}
