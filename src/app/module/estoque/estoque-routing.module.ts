import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEstoqueComponent } from './cadastro-estoque/cadastro-estoque.component';
import { ListaEstoqueComponent } from './lista-estoque/lista-estoque.component';

const routes: Routes = 
[
    {
        path:"listar",component:ListaEstoqueComponent
    }
    ,
    {
        path:"cadastro-produto", component:CadastroEstoqueComponent
    }
    ,
    {
        path:"cadastro-produto/:codigo", component:CadastroEstoqueComponent
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }