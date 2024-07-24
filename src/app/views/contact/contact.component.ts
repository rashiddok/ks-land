import { ChangeDetectionStrategy, Component, Self } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
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
  contactForm!: UntypedFormGroup;
  constructor(@Self() private mailService: SendmailService) {
    this.contactForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9@._-]*')]),
      message: new UntypedFormControl('', [Validators.required, Validators.pattern('[A-Za-zА-Яа-я0-9.!?-_]*')]),
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
