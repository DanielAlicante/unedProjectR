import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { logging } from 'protractor';
import { JsonPipe } from '@angular/common';

//import { HttpClientJsonpModule } from  '@angular/common/http';
//import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-send2',
  templateUrl: './send2.component.html',
  styleUrls: ['./send2.component.scss']
})
export class Send2Component implements OnInit {
  found:boolean;
  name:any ;
  data1 : Object;
  expertise:string;

  constructor(private httpClient: HttpClient) { }
  onNameKeyUP(event:any){
    console.log(event.target.value);
    this.name=event.target.value;
    this.found=false;
    this.expertise="nulo";
  }

  getProfile(){
    console.log(this.name);
    this.httpClient.get('http://localhost:8080/company/employees/' + (this.name))
    .subscribe(
      (data:any[] )=>{
        console.log(data);
        this.found=true;
        this.data1=data;
        //this.expertise=data[(this.name)].expertise;
        console.log(this.expertise);
        this.expertise=data[4].expertise;
        console.log(this.expertise);
        
      }
    )
  }


  postProfile(){
    console.log(this.name);
    this.httpClient.post('http://localhost:8080/company/employees/', {

      name : "daniangular",
      designation : "fujiangular",
      expertise: "tecnicoangular"

    } )
    .subscribe(
      (data:any)=>{
        console.log(data);

      
        
      }
    )
  }


  ngOnInit() {
  }

}
