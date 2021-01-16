import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MotherBoardService {

  private baseUrl = 'http://13.127.23.111:8080/products';

  constructor(private httpClient: HttpClient) { }

  getProductList():  Observable<any>  {
    const productUrl = `${this.baseUrl}`+`/mother-board`;
    console.log(productUrl);

    return this.httpClient.get(`${this.baseUrl}`+`/mother-board`);
  } 
}
