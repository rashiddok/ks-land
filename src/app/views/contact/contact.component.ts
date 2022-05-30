import { ChangeDetectionStrategy, Component, Self } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailMessage } from '../../shared/models/EmailMessage';
import { SendmailService } from './sendmail.service';


//TODO: ADD ERROR MESSAGE
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [SendmailService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  contactForm!: FormGroup;
  constructor(@Self() private mailService: SendmailService) {
    this.contactForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9@._-]*')]),
      message: new FormControl('', [Validators.required, Validators.pattern('[A-Za-zА-Яа-я0-9.!?-_]*')]),
    });
  }

  ngOnInit(): void {}

  sendEmail() {
    const { email, message } = this.contactForm.getRawValue();
    const emailMessage: EmailMessage = new EmailMessage(email, message);
    this.mailService.sendEmail(emailMessage).subscribe((res) => {
      console.log(res);
    });
  }
}
