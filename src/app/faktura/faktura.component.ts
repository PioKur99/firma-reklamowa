import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Faktura } from '../data/faktura';

@Component({
  selector: 'app-faktura',
  templateUrl: './faktura.component.html',
  styleUrls: ['./faktura.component.scss']
})
export class FakturaComponent implements OnInit {

  faktury: Faktura[] = [{id: 1, klientId: 1, billboardId:  1, kwota: 199.99, nip: "645293293293"},
  {id: 2, klientId: 1, billboardId:  2, kwota: 299.99, nip: "645293293293"}
];

  constructor(private dataManager: DataService) { }

  ngOnInit(): void {
  }

  getFaktury(): void {
    this.dataManager.getFaktury().subscribe(
      data => {
        this.faktury = data
      }
    )
  }

  addFaktura(): void {
    this.faktury.push({id: 3, klientId: 1, billboardId:  3, kwota: 399.99, nip: "645293293293"});
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
