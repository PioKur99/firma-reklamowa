import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
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
  

  constructor(private dataManager: DataService) { }

  ngOnInit(): void {
  }

  getClients(): void {
    this.dataManager.getKlienci().subscribe(
      clients => {
        this.klienci = clients
      }
    )
  }

  addClient(): void {
    
    this.klienci.push({idc: 0, imie: "a", nazwisko:  "a", pesel: "0"});
    this.dataManager.postKlient(this.klienci[this.klienci.length - 1]).subscribe(
      newClient => {
        console.log(newClient)
      }
    )
  }

  removeClient(klient: Klient): void {
    this.dataManager.deleteKlient(klient.idc).subscribe(
      data => {
        console.log(data)
      }
    )
    this.klienci.splice(this.klienci.indexOf(klient), 1);
  }

  editClient(klient: Klient): void {
    this.dataManager.putKlient(klient).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
