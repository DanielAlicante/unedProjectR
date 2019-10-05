import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//<<<<<<< HEAD
import {
  // The NG module for using @angular/common/http
  HttpClientModule
} from  '@angular/common/http';
import {
  // the ng module for using routing    13-09-19
  RouterModule,
  Routes
} from '@angular/router'

//=======
//import { HttpClientModule } from  '@angular/common/http';
//import { HttpClientJsonpModule } from  '@angular/common/http';
import {FormsModule,
        ReactiveFormsModule} from '@angular/forms';
//>>>>>>> 1ae3a9daf157ab603f0690d21a7f3d4a4af111ee

/*Components*/
import { AppRoutingModule } from './components/app/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { ComunicacionComponent } from './components/comunicacion/comunicacion.component';
import { SendComponent } from './components/send/send.component';
import { Send2Component } from './components/send2/send2.component';
import { ContactComponent } from './components/contact/contact.component';
import { DemoFormSkuComponent } from './components/demo-form-sku/demo-form-sku.component';
import { DemoFormSkuWithBuilderComponent } from './components/demo-form-sku-with-builder/demo-form-sku-with-builder.component';

/*Service   vacio   */

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    ComunicacionComponent,
    SendComponent,
    Send2Component,
    ContactComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // para hacer peticiones a STS
    FormsModule, // ADD forms
    ReactiveFormsModule // Add forms
  ],
  providers: [], /* van aquí servicios y cosas queramos importar*/
  bootstrap: [AppComponent]  /*componente principal aplicación */
})
export class AppModule { }
