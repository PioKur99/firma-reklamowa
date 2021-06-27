import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Billboard } from '../data/billboard';
import { Faktura, postFaktura } from '../data/faktura';

@Component({
  selector: 'app-faktura',
  templateUrl: './faktura.component.html',
  styleUrls: ['./faktura.component.scss']
})
export class FakturaComponent implements OnInit {

  faktury: Faktura[] = [{id: 0, klientId: 0, kwota: 199.99, nip: "645293293293"},
  {id: 0, klientId: 0, kwota: 299.99, nip: "645293293293"}
];

  billboardy: Billboard[] = [{id: 1, faktura: 1, adres:  "Radzionków, ul. Grenadierów 25/3"},
{id: 2, faktura: 1, adres:  "Bytom, ul. Podmiejska 39/13"}
];

  searchID: number = 0
  showTable: boolean = false

  constructor(private dataManager: DataService) { }

  ngOnInit(): void {
    this.getFaktury()
  }

  getBillboards(): void {
    this.showTable = true
    this.dataManager.getBillboardy().subscribe(
      billboardy => {
        this.billboardy = billboardy
        console.log(billboardy)
      }
    )
  }

  getFaktury(): void {
    this.dataManager.getFaktury().subscribe(
      data => {
        this.faktury = data
        console.log(data)
      }
    )
  }

  addFaktura(): void {
    this.faktury.push({id: 0, klientId: 0, kwota: 399.99, nip: "645293293293"});
    let toAdd: postFaktura = {/*klientId: this.faktury[this.faktury.length -1].klientId,*/
                              kwota: this.faktury[this.faktury.length -1].kwota,
                              nip: this.faktury[this.faktury.length -1].nip}

    this.dataManager.postFaktura(toAdd).subscribe(
      newFaktura => {
        console.log(newFaktura)
      }
    )
    this.getFaktury()
  }

  removeFaktura(faktura: Faktura): void {
    this.dataManager.deleteFaktura(faktura.id).subscribe(
      data => {
        console.log(data)
      }
    )
    this.faktury.splice(this.faktury.indexOf(faktura), 1);
  }

  editFaktura(faktura: Faktura): void {
    this.dataManager.putFaktura(faktura).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
