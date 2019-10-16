import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeparmentListComponent } from '../routing/deparment-list/deparment-list.component';
import { EmployeeListComponent } from '../routing/employee-list/employee-list.component';

// construirmos los objetos {} que nos dan las routas
const routes: Routes = [
{ path: 'deparments' , component: DeparmentListComponent},
{ path: 'employees'  , component: EmployeeListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[DeparmentListComponent, EmployeeListComponent]