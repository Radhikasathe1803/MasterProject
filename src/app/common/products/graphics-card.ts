import { Product } from "./product";

export class GraphicsCard extends Product{
	id:number;
	chipset:string;
	videoMemory:number;
	coreClock:number;
	boostClock:number;
	length:number;
	thickNess:number;
}

