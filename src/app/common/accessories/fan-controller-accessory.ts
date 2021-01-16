import { Product } from "MasterProject/src/app/common/products/product";

export class FanControllerAccessory extends Product {
	id:number;
        channels:number;
	channelWattage:number;
	formFactor:number;
	pwn:boolean;
}