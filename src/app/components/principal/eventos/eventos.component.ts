import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';

import data from '../../../../data/eventos.json';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  data;
  parentMessage = "mensaje desde eventos";
  constructor(){
    this.data=Object.values(data);
  }

}

