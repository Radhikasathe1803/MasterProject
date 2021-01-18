import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private data: string;
  private name: string;
  private component: Map<string,number> = new Map();

   public getData() {
   let temp:String = this.data
    console.log(this.data);
    this.eraseData();
    return temp;
  }
  setData(data: string) {
    console.log(data);
    this.data = data;
  }
  eraseData(){
    this.data=undefined;
  }

  public getComponent(key:string) :number{
    return this.component.get(key);
   }
   setComponent(key:string,value:number) {
     this.component.set(key,value);
   }
   getMap():Map<string,number>{
    return this.component;
   }
   eraseName(){
     this.name=undefined;
   }

}
