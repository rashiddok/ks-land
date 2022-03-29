import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SocialsModule } from 'src/app/components/socials/socials.module';
import { ShareModule } from 'src/app/components/share/share.module';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    SocialsModule,
    ShareModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
