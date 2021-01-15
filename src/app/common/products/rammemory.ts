import { Product } from "./product";

 export class RAMMemory extends Product{
    id:number;
    noOfSticks:number;
    ramSize:number;
    totalSize:number;
    //RamType type;....................................enum
    speed:number;
    firstWordLatency:number;
    columnAddressStrobe:number;
 }
