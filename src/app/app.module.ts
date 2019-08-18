import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  // The NG module for using @angular/common/http
  HttpClientModule
} from  '@angular/common/http';


/*Components*/
import { AppRoutingModule } from './components/app/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { ComunicacionComponent } from './components/comunicacion/comunicacion.component';

/*Service   vacio   */

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    ComunicacionComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // para hacer peticiones a STS
  ],
  providers: [], /* van aquí servicios y cosas queramos importar*/
  bootstrap: [AppComponent]  /*componente principal aplicación */
})
export class AppModule { }
