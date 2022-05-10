import { Injectable } from '@angular/core';
import {ModalComponent} from "./modal.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: ModalComponent[] = []

  remove(id: string){
    this.modals.filter(x=>x.id !== id)
  }

  add(modal: ModalComponent){
    const foundModal = this.modals.find(x=>x.id === modal.id)
    if(foundModal){
      return
    }
    this.modals.push(modal)
  }

  open = (id: string) =>{
    const modal = this.modals.find(x=>x.id === id)
    if(modal){
      modal.open()
    }
  }

  close(id: string){
    const modal = this.modals.find(x=>x.id === id)
    if(modal){
      modal.close()
    }
  }

  modalExists(id: string){
    return Boolean(this.modals.find(x=>x.id === id))
  }
}
