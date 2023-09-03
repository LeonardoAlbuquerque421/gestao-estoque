import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrecoComponent } from './preco/preco.component';
import { PrecoRoutingModule } from './preco-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PrecoComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    CommonModule,
    PrecoRoutingModule
  ]
})
export class PrecoModuleModule { }
