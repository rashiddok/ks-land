import {Component, ElementRef, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ModalService} from "./modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id!: string;
  private el: HTMLElement;

  constructor(private modalService: ModalService, private elementRef: ElementRef) {
    this.el = elementRef.nativeElement
  }

  ngOnInit() {
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }
    if(this.modalService.modalExists(this.id)){
      this.el.remove()
      return;
    }

    this.el.addEventListener('click', elem => {
      // @ts-ignore
      if (elem.target.className === 'modal') {
        this.close();
      }
    });
    document.body.appendChild(this.el);

    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.el.remove();
  }

  open(): void {
    this.el.style.display = 'block';
  }

  close(): void {
    this.el.style.display = 'none';
  }
}
