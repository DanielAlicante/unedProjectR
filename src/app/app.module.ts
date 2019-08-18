import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/*Components*/
import { AppRoutingModule } from './components/app/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';

/*Service   vacio   */

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], /* van aquí servicios y cosas queramos importar*/
  bootstrap: [AppComponent]  /*componente principal aplicación */
})
export class AppModule { }
