import { Injectable } from '@angular/core';
import data from '../data/eventos.json';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor() { }

  getNombre():Array<Object>{
    return Object.values(data);
  }
}
