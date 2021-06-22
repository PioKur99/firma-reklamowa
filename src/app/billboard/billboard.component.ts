import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Billboard } from '../data/billboard';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})
export class BillboardComponent implements OnInit {

  billboardy: Billboard[] = [{id: 1, fakturaId: 1, adres:  "Radzionków, ul. Grenadierów 25/3"},
  {id: 2, fakturaId: 1, adres:  "Bytom, ul. Podmiejska 39/13"}
];

  constructor(private dataManager: DataService) { }

  ngOnInit(): void {
  }

  getBillboards(): void {
    this.dataManager.getBillboardy().subscribe(
      billboardy => {
        this.billboardy = billboardy
      }
    )
  }

  addBillboard(): void {
    this.billboardy.push({id: 3, fakturaId: 1, adres:  "Chorzów, ul. Batorego 42"});
    this.dataManager.postBillboard(this.billboardy[this.billboardy.length - 1]).subscribe(
      newBillboard => {
        console.log(newBillboard)
      }
    )
  }

  removeBillboard(billboard: Billboard): void {
    this.dataManager.deleteBillboard(billboard.id).subscribe(
      data => {
        console.log(data)
      }
    )
    this.billboardy.splice(this.billboardy.indexOf(billboard), 1);
  }

  editBillboard(billboard: Billboard): void {
    this.dataManager.putBillboard(billboard).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
