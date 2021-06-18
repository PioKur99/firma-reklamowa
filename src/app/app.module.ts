import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { KlientComponent } from './klient/klient.component';
import { FakturaComponent } from './faktura/faktura.component';
import { BillboardComponent } from './billboard/billboard.component';
import { ReklamaComponent } from './reklama/reklama.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    KlientComponent,
    FakturaComponent,
    BillboardComponent,
    ReklamaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
