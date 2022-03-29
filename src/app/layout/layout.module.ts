import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from './header/header.module';
import { ContactFormModule } from './contact-form/contact-form.module';
import { FooterModule } from './footer/footer.module';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    ContactFormModule,
    FooterModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
