import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Klient } from './data/klient';
import { Faktura } from './data/faktura';
import { Billboard, postBillboard } from './data/billboard';
import { Reklama, postReklama } from './data/reklama';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getKlienci(): Observable<Klient[]> {
    return this.http.get<Klient[]>("url");
  }

  getBillboardy(): Observable<Billboard[]> {
    return this.http.get<Billboard[]>("http://localhost:8080/take/firma/billboard");
  }

  getFaktury(): Observable<Faktura[]> {
    return this.http.get<Faktura[]>("url");
  }

  getReklamy(): Observable<Reklama[]> {
    return this.http.get<Reklama[]>("http://localhost:8080/take/firma/reklama");
  }



  postKlient(klient: Klient): Observable<any> {
    return this.http.post<Klient>("url", klient);
  }

  postBillboard(billboard: postBillboard): Observable<any> {
    return this.http.post<Billboard>("http://localhost:8080/take/firma/billboard", billboard);
  }

  postFaktura(faktura: Faktura): Observable<any> {
    return this.http.post<Faktura>("url", faktura);
  }

  postReklama(reklama: postReklama): Observable<any> {
    return this.http.post<Reklama>("http://localhost:8080/take/firma/reklama", reklama);
  }




  deleteKlient(id: number): Observable<Klient> {
    return this.http.delete<Klient>("url" + id);
  }

  deleteBillboard(id: number): Observable<Billboard> {
    return this.http.delete<Billboard>("http://localhost:8080/take/firma/billboard/" + id);
  }

  deleteFaktura(id: number): Observable<Faktura> {
    return this.http.delete<Faktura>("url" + id);
  }
  
  deleteReklama(id: number): Observable<Reklama> {
    return this.http.delete<Reklama>("http://localhost:8080/take/firma/reklama/" + id);
  }



  putKlient(klient: Klient): Observable<any> {
    return this.http.put<Klient>("url", klient);
  }

  putBillboard(billboard: Billboard): Observable<any> {
    return this.http.put<Billboard>("http://localhost:8080/take/firma/billboard", billboard);
  }

  putFaktura(faktura: Faktura): Observable<any> {
    return this.http.put<Faktura>("url", faktura);
  }

  putReklama(reklama: Reklama): Observable<any> {
    return this.http.put<Reklama>("http://localhost:8080/take/firma/reklama", reklama);
  }

}
