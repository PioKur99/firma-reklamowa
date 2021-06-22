import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Reklama } from '../data/reklama';

@Component({
  selector: 'app-reklama',
  templateUrl: './reklama.component.html',
  styleUrls: ['./reklama.component.scss']
})
export class ReklamaComponent implements OnInit {

  reklamy: Reklama[] = [{id: 1, tresc: "Padłeś powstań", dataPowieszenia:  "05.02.2021", dataSciagniecia: "05.03.2021", kwota: 100.50},
  {id: 2, tresc: "Ziemniaki 3.50", dataPowieszenia:  "10.04.2021", dataSciagniecia: "10.05.2021", kwota: 200.50}
];

  constructor(private dataManager: DataService) { }

  ngOnInit(): void {
  }

  getReklamy(): void {
    this.dataManager.getReklamy().subscribe(
      reklamy => {
        this.reklamy = reklamy
      }
    )
  }

  addReklama(): void {
    this.reklamy.push({id: 3, tresc: "Kup 8 żubrów zapłać jak za 4", dataPowieszenia:  "25.04.2021", dataSciagniecia: "28.05.2021", kwota: 300.50});
    this.dataManager.postReklama(this.reklamy[this.reklamy.length - 1]).subscribe(
      data => {
        console.log(data)
      }
    )
  }

  removeReklama(reklama: Reklama): void {
    this.dataManager.deleteReklama(reklama.id).subscribe(
      data => {
        console.log(data)
      }
    )
    this.reklamy.splice(this.reklamy.indexOf(reklama), 1);
  }

  editReklama(reklama: Reklama): void {
    this.dataManager.putReklama(reklama).subscribe(
      data => {
        console.log(data)
      }
    )
    
  }

}
