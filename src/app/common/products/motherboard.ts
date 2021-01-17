import { Product } from "./product";

export class Motherboard extends Product {
    id:number;
    socket:string;
   FormFactor :string;
    maxMemory:number;
    memorySlots:number;
    chipset:string;
}
   
