import { Product } from "./product";

export class Cpu extends Product
{
    available: boolean;
    brand: string;
    color: string;
    coreClock: number;
    coreCount:  number;
    graphicsType: string;
    id: number;
    imageUrl: string;
    integratedGraphics: boolean;
    manufacturer: string;
    name: string;
    price: number;                                                                                                                                                                                                                                      
    simMultiThread: boolean;
    tdp: number;
}