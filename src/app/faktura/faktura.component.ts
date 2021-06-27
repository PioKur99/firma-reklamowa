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

  faktury: Faktura[] = [];

  billboardy: Billboard[] = [];

  searchID: number = 0
  showTable: boolean = false

  constructor(private dataManager: DataService) { }

  ngOnInit(): void {
    this.getFaktury()
  }

  getBillboards(): void {
    this.showTable = true
    this.dataManager.getBillboardyFaktury(this.searchID).subscribe(
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
    this.faktury.push({id: 0, idk: 0, kwota: 0, nip: ""});
    let toAdd: postFaktura = {kwota: this.faktury[this.faktury.length -1].kwota,
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
