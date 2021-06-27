import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Faktura } from '../data/faktura';
import { Klient, postKlient } from '../data/klient';
import { Reklama } from '../data/reklama';


@Component({
  selector: 'app-klient',
  templateUrl: './klient.component.html',
  styleUrls: ['./klient.component.scss']
})
export class KlientComponent implements OnInit {

  klienci: Klient[] = [];

  faktury: Faktura[] = [];

  reklamy: Reklama[] = [];

searchID: number = 0
searchIDReklamy: number = 0
showTable: boolean = false
showTableReklamy: boolean = false
  

  constructor(private dataManager: DataService) { }

  ngOnInit(): void {
    this.getClients()
  }

  getReklamy(): void {
    this.showTableReklamy = true
    this.dataManager.getReklamyKlienta(this.searchIDReklamy).subscribe(
      data => {
        this.reklamy = data
      }
    )
  }

  getFaktury(): void {
    this.showTable = true
    this.dataManager.getFakturyKlienta(this.searchID).subscribe(
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
    
    this.klienci.push({id: 0, imie: "", nazwisko:  "", pesel: ""});
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
