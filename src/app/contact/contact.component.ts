import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailMessage } from '../models/EmailMessage';
import { SendmailService } from '../services/api/sendmail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup
  constructor(
    private mailService: SendmailService
  ) {
    this.contactForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required]),
        message: new FormControl('', [Validators.required])
      }
    )
  }

  ngOnInit(): void {
  }

  emailKeypress(event: any){
    const key: string = event.key
    return /[A-Za-z0-9@._-]/.test(key)
  }

  sendEmail(){
    if(this.contactForm.invalid){
      return
    }
    const {email, message} = this.contactForm.getRawValue()
    const emailMessage: EmailMessage = new EmailMessage(email, message)
    this.mailService.sendEmail(emailMessage).subscribe(res=>{
      console.log(res)
    })
  }

}
