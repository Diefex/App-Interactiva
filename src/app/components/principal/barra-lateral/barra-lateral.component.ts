import { style } from '@angular/animations';
import { Component,ElementRef,ViewChild, Renderer2 } from '@angular/core';
let ancho:number=0;


@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent {

  constructor(private render2: Renderer2){

  }
  
 @ViewChild('nav_lat')nav!: ElementRef;

  menuDesplegar():void{

    if(ancho==0){
      ancho=80;
    }else{
      ancho=0;
    }
    let nav_des= this.nav.nativeElement;
    this.render2.setStyle(nav_des,'width', ancho+'%');
  }


}
