import { Product } from "./product";

export class Motherboard extends Product {
    id:number;
    socket:string;
  //  FormFactor formFactor;........................enum
    maxMemory:number;
    memorySlots:number;
    chipset:string;
}
   
