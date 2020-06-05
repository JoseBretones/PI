import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Instructor } from '../models/instructor';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  instructorURL = environment.url+'monitores/';


  constructor(private httpClient: HttpClient) { }


  public lista(): Observable<any> {
    return this.httpClient.get(this.instructorURL+'lista' , environment.cabecera)
    .pipe(map(item=>{
      return item;
    }));
  }

  public detalle(id: number): Observable<Instructor> {
    return this.httpClient.get<Instructor>(this.instructorURL + `detalle/${id}`, environment.cabecera);
  }

  public crear(instructor: Instructor): Observable<any> {
    return this.httpClient.post<any>(this.instructorURL  + 'new', instructor, environment.cabecera);
  }

  public editar(instructor: Instructor, id: number): Observable<any> {
    return this.httpClient.put<any>(this.instructorURL  + `actualizar/${id}`, instructor, environment.cabecera);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.instructorURL  + `borrar/${id}`, environment.cabecera);
  }

}
