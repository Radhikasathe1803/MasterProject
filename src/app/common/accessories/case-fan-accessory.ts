import { Product } from "MasterProject/src/app/common/products/product";

export class CaseFanAccessory extends Product{
	id:number;
	size:number;
	rpm:number;
        airFlow:number;
	noiseLevel:number;
	pwm:boolean;
}