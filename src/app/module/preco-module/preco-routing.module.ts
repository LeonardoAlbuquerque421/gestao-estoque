import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrecoComponent } from './preco/preco.component';

const routes: Routes = [
{
    path:"lista", component:PrecoComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrecoRoutingModule { }
