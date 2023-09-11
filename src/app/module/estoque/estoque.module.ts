import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { CadastroEstoqueComponent } from './cadastro-estoque/cadastro-estoque.component';
import { ListaEstoqueComponent } from './lista-estoque/lista-estoque.component';
import { EstoqueRoutingModule } from './estoque-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { CurrencyFormatPipe } from 'src/app/pipe/currency-format.pipe';



@NgModule({
  declarations: [
    CurrencyFormatPipe,
    CadastroEstoqueComponent,
    ListaEstoqueComponent
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDividerModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ] 
})
export class EstoqueModule { }
