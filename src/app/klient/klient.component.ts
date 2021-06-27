import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Faktura } from '../data/faktura';
import { Klient, postKlient } from '../data/klient';


@Component({
  selector: 'app-klient',
  templateUrl: './klient.component.html',
  styleUrls: ['./klient.component.scss']
})
export class KlientComponent implements OnInit {

  klienci: Klient[] = [{id: 0, imie: "a", nazwisko:  "b", pesel: "12321"},
                      {id: 0, imie: "aaa", nazwisko:  "bbb", pesel: "1232232321"}
  ];

  faktury: Faktura[] = [{id: 0, klientId: 0, kwota: 199.99, nip: "645293293293"},
  {id: 0, klientId: 0, kwota: 299.99, nip: "645293293293"}
];

searchID: number = 0
showTable: boolean = false
  

  constructor(private dataManager: DataService) { }

  ngOnInit(): void {
    this.getClients()
  }

  getFaktury(): void {
    this.showTable = true
    this.dataManager.getFaktury().subscribe(
      data => {
        this.faktury = data
      }
    )
  }

  getClients(): void {
    this.dataManager.getKlienci().subscribe(
      clients => {
        this.klienci = clients
        console.log(clients)
      }
    )
  }

  addClient(): void {
    
    this.klienci.push({id: 0, imie: "a", nazwisko:  "a", pesel: "0"});
    let toAdd: postKlient = {imie: this.klienci[this.klienci.length -1].imie ,
                            nazwisko: this.klienci[this.klienci.length -1].nazwisko,
                            pesel: this.klienci[this.klienci.length -1].pesel}
    this.dataManager.postKlient(toAdd).subscribe(
      newClient => {
        console.log(newClient)
      }
    )
    this.getClients()
  }

  removeClient(klient: Klient): void {
    this.dataManager.deleteKlient(klient.id).subscribe(
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
