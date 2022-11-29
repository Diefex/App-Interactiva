import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { SharedModule } from '../shared/shared.module';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    BarraSuperiorComponent,
    BarraLateralComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    SharedModule
  ]
})
export class PrincipalModule { }
