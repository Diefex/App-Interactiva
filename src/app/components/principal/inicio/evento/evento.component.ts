import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {
  @Input() nombre!:String;
  @Input() id!:String;
  @Input() fecha!:String;
  @Input() img!:String;
  @Input() descripcion_corta!:String;
  @Input() descripcion!:String;

  constructor(){
    
  }
}
