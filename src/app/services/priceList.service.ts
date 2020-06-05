import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PriceList } from '../models/priceList';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class PriceListService {


  priceListURL = environment.url+'tarifas/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<any> {
    return this.httpClient.get(this.priceListURL+'lista' , environment.cabecera)
    .pipe(map(item=>{
      return item;
    }));
  }

  public detalle(id: number): Observable<PriceList> {
    return this.httpClient.get<PriceList>(this.priceListURL + `detalle/${id}`, environment.cabecera);
  }

  public crear(priceList: PriceList): Observable<any> {
    return this.httpClient.post<any>(this.priceListURL + 'new', priceList, environment.cabecera);
  }

  public editar(priceList: PriceList, id: number): Observable<any> {
    return this.httpClient.put<any>(this.priceListURL + `actualizar/${id}`, priceList, environment.cabecera);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.priceListURL + `borrar/${id}`, environment.cabecera);
  }



}
