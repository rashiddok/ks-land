import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SocialsModule} from "../../components/socials/socials.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{ path: '', component: ContactComponent }];

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SocialsModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ContactModule { }
