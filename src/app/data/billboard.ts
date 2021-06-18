import { BillboardReklama } from "./billboard-reklama";
import { Faktura } from "./faktura";
import { Reklama } from "./reklama";

export class Billboard {
    id: number;
    faktura: Faktura;
    adres: String;
    billboardReklamy: BillboardReklama[];
}
