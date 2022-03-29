import { Component, OnInit } from '@angular/core';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  faShare = faShareNodes
  constructor() { }

  ngOnInit(): void {
  }

  shareClick(){
    const url: string = 'https://web.dev'
    const text: string = 'Откройте для себя web.dev.'
    const shareData = {
      title: 'web.dev',
      text,
      url
    }
    // if(navigator?.canShare(shareData)){
    //   navigator.share(shareData)
    //   .catch((error) => console.log('Share Error: ', error));
    // } else{
      // window.open(`https://t.me/share/url?url=${url}&text=${text}`)
      // window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`)
      // window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`)
    // }

  }

}
