import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Klient, postKlient } from './data/klient';
import { Faktura, postFaktura } from './data/faktura';
import { Billboard, postBillboard } from './data/billboard';
import { Reklama, postReklama } from './data/reklama';
import { Observable } from 'rxjs';
import { BillboardReklama } from './data/billboard-reklama';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getKlienci(): Observable<Klient[]> {
    return this.http.get<Klient[]>("http://localhost:8080/take/firma/klient");
  }

  getBillboardy(): Observable<Billboard[]> {
    return this.http.get<Billboard[]>("http://localhost:8080/take/firma/billboard");
  }

  getFaktury(): Observable<Faktura[]> {
    return this.http.get<Faktura[]>("http://localhost:8080/take/firma/faktura");
  }

  getReklamy(): Observable<Reklama[]> {
    return this.http.get<Reklama[]>("http://localhost:8080/take/firma/reklama");
  }

  getPowieszoneReklamy(): Observable<BillboardReklama[]> {
    return this.http.get<BillboardReklama[]>("http://localhost:8080/take/firma/billboardReklama")
  }

  getFakturyKlienta(id: number): Observable<Faktura[]> {
    return this.http.get<Faktura[]>("http://localhost:8080/take/firma/klient/getFaktury/" + id)
  }

  getBillboardyFaktury(id: number): Observable<Billboard[]> {
    return this.http.get<Billboard[]>("http://localhost:8080/take/firma/faktura/getBillboardy/" + id)
  }

  getReklamyKlienta(id: number): Observable<Reklama[]> {
    return this.http.get<Reklama[]>("url" + id)
  }




  postKlient(klient: postKlient): Observable<any> {
    return this.http.post<Klient>("http://localhost:8080/take/firma/klient", klient);
  }

  postBillboard(billboard: postBillboard): Observable<any> {
    return this.http.post<Billboard>("http://localhost:8080/take/firma/billboard", billboard);
  }

  postFaktura(faktura: postFaktura): Observable<any> {
    return this.http.post<Faktura>("http://localhost:8080/take/firma/faktura", faktura);
  }

  postReklama(reklama: postReklama): Observable<any> {
    return this.http.post<Reklama>("http://localhost:8080/take/firma/reklama", reklama);
  }

  postPowieszonaReklama(reklama: BillboardReklama): Observable<any> {
    return this.http.post<BillboardReklama>("http://localhost:8080/take/firma/billboardReklama/", reklama)
  }




  deleteKlient(id: number): Observable<Klient> {
    return this.http.delete<Klient>("http://localhost:8080/take/firma/klient/" + id);
  }

  deleteBillboard(id: number): Observable<Billboard> {
    return this.http.delete<Billboard>("http://localhost:8080/take/firma/billboard/" + id);
  }

  deleteFaktura(id: number): Observable<Faktura> {
    return this.http.delete<Faktura>("http://localhost:8080/take/firma/faktura/" + id);
  }
  
  deleteReklama(id: number): Observable<Reklama> {
    return this.http.delete<Reklama>("http://localhost:8080/take/firma/reklama/" + id);
  }

  deletePowieszonaReklama(id: number): Observable<BillboardReklama> {
    return this.http.delete<BillboardReklama>("http://localhost:8080/take/firma/billboardReklama/" + id)
  }



  putKlient(klient: Klient): Observable<any> {
    return this.http.put<Klient>("http://localhost:8080/take/firma/klient", klient);
  }

  putBillboard(billboard: Billboard): Observable<any> {
    return this.http.put<Billboard>("http://localhost:8080/take/firma/billboard", billboard);
  }

  putFaktura(faktura: Faktura): Observable<any> {
    return this.http.put<Faktura>("http://localhost:8080/take/firma/faktura", faktura);
  }

  putReklama(reklama: Reklama): Observable<any> {
    return this.http.put<Reklama>("http://localhost:8080/take/firma/reklama", reklama);
  }

  putPowieszonaReklama(reklama: BillboardReklama): Observable<any> {
    return this.http.put<BillboardReklama>("http://localhost:8080/take/firma/billboardReklama", reklama)
  }

}
