import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup
  constructor() {
    this.contactForm = new FormGroup(
      {
        email: new FormControl('', []),
        message: new FormControl('', [])
      }
    )
  }

  ngOnInit(): void {
  }

}
