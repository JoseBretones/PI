import { Client } from './client';
import { Time } from '@angular/common';
import { Class } from './class';

export class AttendClass {
  id: number;
  client: Client;
  clase: Class;
  nombreMonitor: string;
  nombreActividad: string;
  horaComienzo: Time;
  horaFinalizacion: Time;
  fechaClase: Date;
}
