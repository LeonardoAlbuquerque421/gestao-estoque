import { Component } from '@angular/core';
import { LoaderService } from 'src/app/emitter/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  loader : boolean;

  constructor(private loaderService : LoaderService){
    this.loaderService.emitter.subscribe(emmiter =>{
      this.loader = emmiter;
    })
  }



}
