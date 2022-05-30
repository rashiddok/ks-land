import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {faFacebook, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faXmark} from '@fortawesome/free-solid-svg-icons';
import {ShareItem} from './ShareItem';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareDialogComponent{
  shareItems: ShareItem[] = []
  pageUrl!: string;
  faXmark = faXmark
  @Output() modalClose: EventEmitter<void> = new EventEmitter<void>()
  constructor() {
    const url = document.location.href
    this.pageUrl = url;
    this.shareItems = [
      new ShareItem('Facebook', `https://www.facebook.com/sharer/sharer.php?u=${url}`, faFacebook, 'facebook-icon'),
      new ShareItem('LinkedIn', `https://www.linkedin.com/sharing/share-offsite/?url=${url}`, faLinkedin, 'linkedin-icon'),
      new ShareItem('Telegram', `https://t.me/share/url?url=${url}`, faTelegram, 'telegram-icon'),
      new ShareItem('Email', this.getMailLink(url), faEnvelope, 'ff')
    ]
  }

  shareItemClick(shareItem: ShareItem){
    window.open(shareItem.shareUrl)
  }

  copyLinkClick(){
    navigator.clipboard.writeText(this.pageUrl)
  }

  private getMailLink(url: string): string{
    const subject = "?subject=" + encodeURIComponent("Checkout Ksenya Lanina projects")
    const body = "&body=" + encodeURIComponent("Here you take a look at Ksenya Lanina projects: ") + encodeURIComponent(url)
    const link: string = "mailto:"
    + subject
    + body
    return link
  }

}
