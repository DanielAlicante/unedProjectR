import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.scss']
})
export class ComunicacionComponent implements OnInit {
  data : Object;
  loading : boolean;
  http: HttpClient;




  constructor( http: HttpClient) { 
 this.http = http;
  }
  ngOnInit() {
  }

makeRequest():void{
  // funcion  para pedir información. 
  this.loading=true;
  this.http
    .get ('http://localhost:8080/company/employees')
    //.get ('http://localhost:8080/demo/hello')
    .subscribe(data=>{
         this.data=data;
         this.loading=false;
    })
  

}

}
