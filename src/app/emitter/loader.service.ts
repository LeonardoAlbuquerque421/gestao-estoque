import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  emitter = new EventEmitter<boolean>();

  constructor() { }

  Abrir(){
    this.emitter.emit(true);
  }

  Fechar(){
    this.emitter.emit(false);
  }
}
