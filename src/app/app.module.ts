import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// módulos

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';
import { AttendClassComponent } from './components/attendClass/attend-class.component';
import { ActivityComponent } from './components/activity/activity.component';
import { PriceListComponent } from './components/priceList/price-list.component';
import { ClassComponent } from './components/class/class.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { TableComponent } from './components/table/table.component';
import { FormClientComponent } from './components/form-client/form-client.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HomeComponent,
    ClientComponent,
    AttendClassComponent,
    ActivityComponent,
    PriceListComponent,
    ClassComponent,
    InstructorComponent,
    NavComponent,
    TableComponent,
    FormClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
