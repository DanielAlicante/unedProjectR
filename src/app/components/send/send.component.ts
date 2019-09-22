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
  nombre: string;
  apellido: string;

  constructor( http: HttpClient) {
    this.http=http;
   }

  ngOnInit() {
  }


  makeSend(){
    //this.nombre=nombre;
    //console.log(nombre.value, apellido.value);
    console.log("va 1");
    this.loading=true;
    this.http
      .post(
        'http://localhost:8080/company/employees',
        JSON.stringify({
          name: "this.nombre",
          designation : "this.apellido",
          expertise : "nuevonuevonuevonuevo"
        })
      )
        .subscribe( data =>{
          this.data=data;
          this.loading=false;
        })
      

    //console.log ('nombre: ${nombre.value} nombre ,apellido:  ${apellido.value}' nombre);
    return this.loading=false;;
  }  

}
