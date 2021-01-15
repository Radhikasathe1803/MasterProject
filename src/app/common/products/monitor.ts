import { Product } from "./product";

export class Monitor extends Product{
	id:number;
	screenSize:number;
	resultion:string;
	refreshRate:number;
	responseTime:number;
	//MonitorPanelType panelType;.....................enum
	aspectRatio:string;
}
