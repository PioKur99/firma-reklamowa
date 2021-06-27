import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Reklama, postReklama } from '../data/reklama';

@Component({
  selector: 'app-reklama',
  templateUrl: './reklama.component.html',
  styleUrls: ['./reklama.component.scss']
})
export class ReklamaComponent implements OnInit {

  reklamy: Reklama[] = [{id: 0, tresc: "Padłeś powstań"},
  {id: 0, tresc: "Ziemniaki 3.50"}
];


  constructor(private dataManager: DataService) { }

  ngOnInit(): void {
    this.getReklamy()
  }

  getReklamy(): void {
    this.dataManager.getReklamy().subscribe(
      reklamy => {
        this.reklamy = reklamy
        console.log(reklamy)
      }
    )
  }

  addReklama(): void {
    this.reklamy.push({id: 0, tresc: "Kup 8 żubrów zapłać jak za 4"})
    let toAdd: postReklama = {tresc: this.reklamy[this.reklamy.length - 1].tresc}
    this.dataManager.postReklama(toAdd).subscribe(
      data => {
        console.log(data)
      }
    )
    this.getReklamy()
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
