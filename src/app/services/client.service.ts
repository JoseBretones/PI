import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {Client} from '../models/client';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { ClientForm } from '../components/form-client/form-client.component';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientURL = environment.url+'clientes/';

  constructor(private httpClient: HttpClient) { }


  public lista(): Observable<any> {
    return this.httpClient.get(this.clientURL+'lista' , environment.cabecera)
      .pipe(map(item=>{
        return item;
      }));
  }

  public detalle(id: number): Observable<Client> {
    return this.httpClient.get<Client>(this.clientURL + `detalle/${id}`, environment.cabecera);
  }

  public crear(client: ClientForm): Observable<any> {
    return this.httpClient.post<any>(this.clientURL + 'new', client, environment.cabecera);
  }

  public editar(client: Client, id: number): Observable<any> {
    return this.httpClient.put<any>(this.clientURL + `actualizar/${id}`, client, environment.cabecera);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.clientURL + `borrar/${id}`, environment.cabecera);
  }
}

