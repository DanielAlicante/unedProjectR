import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {
  data : Object;
  loading : boolean;
  http: HttpClient;
  //nombre:HTMLInputElement;

  constructor() { }

  ngOnInit() {
  }


  makeSend( nombre: HTMLInputElement, apellido: HTMLInputElement):boolean{
    //this.nombre=nombre;
    this.loading=true;
    this.http
      .post(
        'http://localhost:8080/demo/postNombre',
        JSON.stringify({
          body: 'noseusarlo',//pagina 208 manual
          nombre: nombre.value,
          apellido: apellido.value
        })
      )
        .subscribe( data =>{
          this.data=data;
          
        })
      

    //console.log ('nombre: ${nombre.value} nombre ,apellido:  ${apellido.value}' nombre);
    return this.loading=false;;
  }  

}
