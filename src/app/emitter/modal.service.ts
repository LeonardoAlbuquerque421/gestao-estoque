import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Modal } from './modal';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog:MatDialog) { }

  emitter = new EventEmitter<string>();

  Mensagem(mensagem:string){
    this.emitter.emit(mensagem)
  }

  AbrirModal(mensagem : string){

    let config = new MatDialogConfig()    
    config.minHeight = "100px";          
    config.minWidth = "450px";
    config.maxWidth = "900px";   
    config.enterAnimationDuration = '2000ms';
    config.exitAnimationDuration = '1000ms';
    
    this.dialog.open(ModalComponent,config)
    this.Mensagem(mensagem);
  }


}
