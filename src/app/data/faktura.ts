import { Billboard } from "./billboard";
import { Klient } from "./klient";

export class Faktura {
    id: number;
    klient: Klient;
    billboardy: Billboard[];
    kwota: number;
    nip: String;
}
