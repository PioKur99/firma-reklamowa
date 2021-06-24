import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { BillboardReklama, postBillboardReklama } from '../data/billboard-reklama';

@Component({
  selector: 'app-powieszone',
  templateUrl: './powieszone.component.html',
  styleUrls: ['./powieszone.component.scss']
})
export class PowieszoneComponent implements OnInit {

  powieszone: BillboardReklama[] = 
  [{idBillboardu: 1, idReklamy: 1, kwota: 199.99, dataPowieszenia: "21-01-2021", dataSciagniecia: "21-02-2021"},
  {idBillboardu: 2, idReklamy: 1, kwota: 299.99, dataPowieszenia: "01-03-2021", dataSciagniecia: "02-04-2021"}]

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
    {idBillboardu: 3, idReklamy: 1, kwota: 99.99, dataPowieszenia: "25-05-2021", dataSciagniecia: "25-06-2021"}

    let postPowieszona: postBillboardReklama = {kwota: newPowieszona.kwota,
    dataPowieszenia: newPowieszona.dataPowieszenia, dataSciagniecia: newPowieszona.dataSciagniecia}

    this.dataManager.postPowieszonaReklama(postPowieszona).subscribe(
      data => {
        console.log(data)
      }
    )
    this.powieszone.push(newPowieszona)
  }

  removePowieszona(reklama: BillboardReklama): void {
    this.dataManager.deletePowieszonaReklama(reklama.idBillboardu).subscribe(
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
