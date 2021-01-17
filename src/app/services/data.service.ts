import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private data: string;

  getData() {
    console.log(this.data);
    return this.data;
  }
  setData(data: string) {
    console.log(data);
    this.data = data;
  }

}
