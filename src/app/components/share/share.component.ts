import { Component, OnInit} from '@angular/core';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import {ModalService} from "../ui/modal";

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  faShare = faShareNodes
  constructor(
    public modalService: ModalService
  ) { }

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
      this.modalService.open('share-modal')
    } else{
      navigator.share(shareData)
      .catch((error) => console.log('Share Error: ', error));
    }


  }

}
