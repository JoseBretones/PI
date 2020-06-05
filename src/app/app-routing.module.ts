import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';
import { ClassComponent } from './components/class/class.component';
import { AttendClassComponent } from './components/attendClass/attend-class.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { PriceListComponent } from './components/priceList/price-list.component';
import { ActivityComponent } from './components/activity/activity.component';
import { FormClientComponent } from './components/form-client/form-client.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'clientes', component: ClientComponent },
  { path: 'clases', component: ClassComponent },
  { path: 'asistencia-clase', component: AttendClassComponent },
  { path: 'monitores', component: InstructorComponent },
  { path: 'tarifas', component: PriceListComponent },
  { path: 'actividades', component: ActivityComponent },
  {path: 'clientes/nuevo', component: FormClientComponent},
  {path:'clientes/editar/:id', component: FormClientComponent},
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
