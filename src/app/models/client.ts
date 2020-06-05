import { PriceList } from './priceList';
import { AttendClass } from './attendClass';

export class Client{

  id: number;
  nombre: string;
  apellidos: string;
  direccion: string;
  fechaNacimiento: Date;
  telefono: number;
  dni: string;
  estado: boolean;
  email: string;
  password: string;
  fechaAlta: Date;
  fechaBaja: Date;
  diasEntrenados: number;
  tarifa: PriceList;
  asistencias: Array<AttendClass>;
}
