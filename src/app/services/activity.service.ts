import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {


  activitiesURL = environment.url+'actividades/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<any> {
    return this.httpClient.get(this.activitiesURL+'lista' , environment.cabecera)
    .pipe(map(item=>{
      return item;
    }));
  }

  public detalle(id: number): Observable<Activity> {
    return this.httpClient.get<Activity>(this.activitiesURL + `detalle/${id}`, environment.cabecera);
  }

  public crear(activity: Activity): Observable<any> {
    return this.httpClient.post<any>(this.activitiesURL + 'new', activity, environment.cabecera);
  }

  public editar(activity: Activity, id: number): Observable<any> {
    return this.httpClient.put<any>(this.activitiesURL + `actualizar/${id}`, activity, environment.cabecera);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.activitiesURL + `borrar/${id}`, environment.cabecera);
  }


}
