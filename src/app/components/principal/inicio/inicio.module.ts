import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InformacionBasicaComponent } from './informacion-basica/informacion-basica.component';
import { InicioComponent } from './inicio.component';
import { EventoComponent } from './evento/evento.component';
import { EventosComponent } from './eventos/eventos.component';


@NgModule({
  declarations: [
    InicioComponent,
    EventoComponent,
    EventosComponent,
    InformacionBasicaComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
