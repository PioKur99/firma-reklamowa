import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Klient } from './data/klient';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(private http: HttpClient) { }

  test() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos/1");
  }
}
