import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { AdicionarProdutoComponent } from './pages/estoque/adicionar-produto/adicionar-produto.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'estoque',component:EstoqueComponent
      }
      ,
      {
        path:'adicionar-produto',component:AdicionarProdutoComponent
      }
      ,
      {
        path:'home',component:HomeComponent
      }
    ]
    
  }
  ,
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
