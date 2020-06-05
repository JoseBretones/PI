import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Class } from '../models/class';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  classURL = environment.url+'clases/';

  constructor(private httpClient: HttpClient) { }


  public lista(): Observable<any> {
    return this.httpClient.get(this.classURL+'lista' , environment.cabecera)
    .pipe(map(item=>{
      return item;
    }));
  }

  public detalle(id: number): Observable<Class> {
    return this.httpClient.get<Class>(this.classURL + `detalle/${id}`, environment.cabecera);
  }

  public crear(clas: Class): Observable<any> {
    return this.httpClient.post<any>(this.classURL + 'new', clas, environment.cabecera);
  }

  public editar(clas: Class, id: number): Observable<any> {
    return this.httpClient.put<any>(this.classURL + `actualizar/${id}`, clas, environment.cabecera);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.classURL + `borrar/${id}`, environment.cabecera);
  }
}
