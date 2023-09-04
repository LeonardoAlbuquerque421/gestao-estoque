import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFornecedorComponent } from './cadastro-fornecedor/cadastro-fornecedor.component';
import { ListaFornecedorComponent } from './lista-fornecedor/lista-fornecedor.component';

const routes: Routes = [
{
    path:"listar",component:ListaFornecedorComponent
}
,
{
    path:"cadastro-fornecedor", component:CadastroFornecedorComponent
}
,
{
    path:"cadastro-fornecedor/:codigo", component:CadastroFornecedorComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedorRoutingModule { }