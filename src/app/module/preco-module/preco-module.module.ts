import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrecoComponent } from './preco/preco.component';
import { PrecoRoutingModule } from './preco-routing.module';

@NgModule({
  declarations: [
    PrecoComponent
  ],
  imports: [
    CommonModule,
    PrecoRoutingModule
  ]
})
export class PrecoModuleModule { }
