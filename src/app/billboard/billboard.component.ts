import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Billboard, postBillboard } from '../data/billboard';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})
export class BillboardComponent implements OnInit {

  billboardy: Billboard[] = [];

  constructor(private dataManager: DataService) { }

  ngOnInit(): void {
    this.getBillboards()
  }

  getBillboards(): void {
    this.dataManager.getBillboardy().subscribe(
      billboardy => {
        this.billboardy = billboardy
        console.log(billboardy)
      }
    )
  }

  addBillboard(): void {
    this.billboardy.push({id: 0, idf: 0, adres:  ""});
    let toAdd: postBillboard = {adres: this.billboardy[this.billboardy.length - 1].adres}
    this.dataManager.postBillboard(toAdd).subscribe(
      newBillboard => {
        console.log(newBillboard)
      }
    )
    this.getBillboards()
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
