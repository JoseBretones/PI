import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AttendClass } from '../models/attendClass';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AttendClassService {


  attendClassURL = environment.url+'asistencia-clase/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<any> {
    return this.httpClient.get(this.attendClassURL+'lista' , environment.cabecera)
      .pipe(map(item=>{
        return item;
      }));
  }

  public detalle(id: number): Observable<AttendClass> {
    return this.httpClient.get<AttendClass>(this.attendClassURL + `detalle/${id}`, environment.cabecera);
  }

  public detalleCliente(id: number): Observable<AttendClass> {
    return this.httpClient.get<AttendClass>(this.attendClassURL + `detalle/cliente/${id}`, environment.cabecera);
  }
  public detalleClase(id: number): Observable<AttendClass> {
    return this.httpClient.get<AttendClass>(this.attendClassURL + `detalle/clase/${id}`, environment.cabecera);
  }

  public crear(attendClass: AttendClass): Observable<any> {
    return this.httpClient.post<any>(this.attendClassURL + 'new', attendClass, environment.cabecera);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.attendClassURL + `borrar/${id}`, environment.cabecera);
  }


}
