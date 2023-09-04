import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
//import { EstoqueComponent } from './pages/estoque/estoque.component';
//import { AdicionarProdutoComponent } from './pages/estoque/cadastro-estoque/cadastro-estoque.component';
//import { FornecedorComponent } from './pages/fornecedor/fornecedor.component';
//import { CadastroFornecedorComponent } from './pages/fornecedor/cadastro-fornecedor/cadastro-fornecedor.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
  //     {
  // //      path:'estoque',component:EstoqueComponent
  //     }
  //     ,
  //     {
  // //      path:'cadastro-produto',component:AdicionarProdutoComponent
  //     }
  //     ,
  //     {
  // //      path:"cadastro-produto/:codigo",component:AdicionarProdutoComponent
  //     }
  //     ,
  //     {
  // //      path:"fornecedor",component:FornecedorComponent
  //     }
  //     ,
  //     {
  // //      path:"cadastro-fornecedor",component:CadastroFornecedorComponent
  //     }
  //     ,
  //     {
  // //      path:"cadastro-fornecedor/:codigo",component:CadastroFornecedorComponent
  //     }
  //     ,
      {
        path:'home',component:HomeComponent
      }
      ,
      {
      path: 'preco',
      loadChildren: () => import('../app/module/preco-module/preco-module.module').then(m => m.PrecoModuleModule)      
      }  
      ,
      {
        path: 'estoque',
        loadChildren: () => import('../app/module/estoque/estoque.module').then(m => m.EstoqueModule)         
      }
      ,
      {
        path: 'fornecedor',
        loadChildren: () => import('../app/module/fornecedor/fornecedor.module').then(m => m.FornecedorModule)         
      }
  ] 
  }
  ,
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
