import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tut-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {

    console.log ("Component Header Creandose!!!")

   }

   ngOnInit() {
    console.log ("Component Header ya Creado!!!")
  }
 nombre = "Tu salud, lo primero"
contador=0
 cambiarNombre(){
   this.nombre +=" Fujitsu"
 }
 suma(){
   this.contador ++
 }
  
  
 
}
