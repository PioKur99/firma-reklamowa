import { Component, OnInit } from '@angular/core';
import { Klient } from '../data/klient';


@Component({
  selector: 'app-klient',
  templateUrl: './klient.component.html',
  styleUrls: ['./klient.component.scss']
})
export class KlientComponent implements OnInit {

  klienci: Klient[] = [{idc: 1, imie: "a", nazwisko:  "b", pesel: "12321"},
                      {idc: 2, imie: "aaa", nazwisko:  "bbb", pesel: "1232232321"}
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

  addClient(): void {
    this.klienci.push({idc: 0, imie: "a", nazwisko:  "a", pesel: "0"});
  }

  removeClient(klient: Klient): void {
    this.klienci.splice(this.klienci.indexOf(klient), 1);
  }

}
