import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Klient } from './data/klient';
import { Faktura } from './data/faktura';
import { Billboard } from './data/billboard';
import { Reklama } from './data/reklama';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  test() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos/1");
  }


  getKlienci(): Observable<Klient[]> {
    return this.http.get<Klient[]>("url");
  }

  getBillboardy(): Observable<Billboard[]> {
    return this.http.get<Billboard[]>("url");
  }

  getFaktury(): Observable<Faktura[]> {
    return this.http.get<Faktura[]>("url");
  }

  getReklamy(): Observable<Reklama[]> {
    return this.http.get<Reklama[]>("url");
  }



  postKlient(klient: Klient): Observable<any> {
    return this.http.post<Klient>("url", klient);
  }

  postBillboard(billboard: Billboard): Observable<any> {
    return this.http.post<Billboard>("url", billboard);
  }

  postFaktura(faktura: Faktura): Observable<any> {
    return this.http.post<Faktura>("url", faktura);
  }

  postReklama(reklama: Reklama): Observable<any> {
    return this.http.post<Reklama>("url", reklama);
  }



  deleteKlient(id: number): Observable<Klient> {
    return this.http.delete<Klient>("url" + id);
  }

  deleteBillboard(id: number): Observable<Billboard> {
    return this.http.delete<Billboard>("url" + id);
  }

  deleteFaktura(id: number): Observable<Faktura> {
    return this.http.delete<Faktura>("url" + id);
  }
  
  deleteReklama(id: number): Observable<Reklama> {
    return this.http.delete<Reklama>("url" + id);
  }



  putKlient(klient: Klient): Observable<any> {
    return this.http.put<Klient>("url", klient);
  }

  putBillboard(billboard: Billboard): Observable<any> {
    return this.http.put<Billboard>("url", billboard);
  }

  putFaktura(faktura: Faktura): Observable<any> {
    return this.http.put<Faktura>("url", faktura);
  }

  putReklama(reklama: Reklama): Observable<any> {
    return this.http.put<Reklama>("url", reklama);
  }

}
