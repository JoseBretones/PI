import { Time } from '@angular/common';
import { Activity } from './activity';
import { Instructor } from './instructor';
import { AttendClass } from './attendClass';
import { DiaSemana } from '../enums/DiaSemana';

export class Class {

  id: number;
  diaSemana: DiaSemana;
  horaComienzo: Time;
  horaFinalizacion: Time;
  actividad: Activity;
  monitor: Instructor;
  asistencias: Array<AttendClass>;
}
