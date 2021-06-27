import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { BillboardReklama } from '../data/billboard-reklama';

@Component({
  selector: 'app-powieszone',
  templateUrl: './powieszone.component.html',
  styleUrls: ['./powieszone.component.scss']
})
export class PowieszoneComponent implements OnInit {

  powieszone: BillboardReklama[] = [];

  constructor(private dataManager: DataService) { }

  ngOnInit(): void {
    this.getPowieszone()
  }

  getPowieszone(): void {
    this.dataManager.getPowieszoneReklamy().subscribe(
      reklamy => {
        this.powieszone = reklamy
        console.log(reklamy)
      }
    )
  }

  addPowieszona(): void {
    let newPowieszona: BillboardReklama = 
    { id: 0, idb: 0, idr: 0, kwota: 0, dataPowieszenia: "", dataSciagniecia: ""}

    this.dataManager.postPowieszonaReklama(newPowieszona).subscribe(
      data => {
        console.log(data)
      }
    )
    this.getPowieszone()
    this.powieszone.push(newPowieszona)
    
  }

  removePowieszona(reklama: BillboardReklama): void {
    this.dataManager.deletePowieszonaReklama(reklama.id).subscribe(
      data => {
        console.log(data)
      }
    )
    this.powieszone.splice(this.powieszone.indexOf(reklama), 1);
  }

  editPowieszona(reklama: BillboardReklama): void {
    this.dataManager.putPowieszonaReklama(reklama).subscribe(
      data =>{
        console.log(data)
      }
    )
  }

}
