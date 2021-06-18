import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillboardComponent } from './billboard/billboard.component';
import { FakturaComponent } from './faktura/faktura.component';
import { KlientComponent } from './klient/klient.component';
import { ReklamaComponent } from './reklama/reklama.component';

const routes: Routes = [
  {path: 'klienci', component: KlientComponent},
  {path: 'faktury', component: FakturaComponent},
  {path: 'billboardy', component: BillboardComponent},
  {path: 'reklamy', component: ReklamaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
