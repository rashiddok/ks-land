import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { ShareDialogComponent } from './share-dialog/share-dialog.component';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  faShare = faShareNodes
  @ViewChild('shareDialog') shareDialog!: ShareDialogComponent;
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
    if(!navigator.canShare){
      this.shareDialog.showDialog()
    } else{
      navigator.share(shareData)
      .catch((error) => console.log('Share Error: ', error));
    }
    

  }

}
