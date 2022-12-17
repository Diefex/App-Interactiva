import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsejeriasComponent } from './consejerias/consejerias.component';
import { InicioComponent } from './inicio/inicio.component';
import { InicioModule } from './inicio/inicio.module';
import { PrincipalComponent } from './principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent, children: [
    { path: '', component: InicioComponent},
    { path: 'consejerias', component: ConsejeriasComponent }
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
