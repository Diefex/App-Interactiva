import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { EventosService } from 'src/app/eventos.service';

import data from '../../../../../data/eventos.json';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  data;
  parentMessage = "mensaje desde eventos";
  constructor(private estudianteService: EventosService){
    this.data=Object.values(data);
  }
  
  getNombre(): void {
    
  }

  ngOnInit(): void {
    
  }

}

