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
arr= [1, 2, 3, 4 ,5 ,6, 7, 8, 9, 10 ]


 cambiarNombre(){
   this.nombre +=" Fujitsu"
 }
 suma(){
   this.contador ++
 }
  
  add(){
    this.arr.push(Math.random())
  }
 
}
