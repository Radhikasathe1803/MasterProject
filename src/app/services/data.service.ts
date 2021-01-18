import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private data: string;

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

}
