import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialsModule } from '../components/socials/socials.module';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SocialsModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ContactModule { }
