import { Product } from "./product";

export class ExternalStorage extends Product{
    id:number;
    ExternalStorageType : string;
    interFace:string;
    capacity:number;
}