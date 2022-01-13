import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: '/colaboradores',
    pathMatch: 'full'
  },
  {
    path: 'colaboradores',
    component: ColaboradoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
