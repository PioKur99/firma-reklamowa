import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Billboard } from './data/billboard';
import { Faktura } from './data/faktura';
import { Klient } from './data/klient';
import { Reklama } from './data/reklama';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
   
  constructor(private manager: DataService) {}

  ngOnInit() {
  }
}
