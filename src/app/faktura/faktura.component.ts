import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Billboard } from '../data/billboard';
import { Faktura } from '../data/faktura';

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

  constructor(private dataManager: DataService) { }

  ngOnInit(): void {
  }

  getBillboards(): void {
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
      }
    )
  }

  addFaktura(): void {
    this.faktury.push({id: 0, klientId: 0, kwota: 399.99, nip: "645293293293"});
    this.dataManager.postFaktura(this.faktury[this.faktury.length - 1]).subscribe(
      newFaktura => {
        console.log(newFaktura)
      }
    )
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
