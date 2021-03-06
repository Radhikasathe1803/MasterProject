import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductConstants } from '../common/ProductConstants';


@Injectable({
  providedIn: 'root'
})
export class MotherBoardService {

  private baseUrl = `${ProductConstants.BASE_URL}${ProductConstants.PRODUCT_ENDPOINT}`


  constructor(private httpClient: HttpClient) { }

  getProductList():  Observable<any>  {
    const productUrl = `${this.baseUrl}`+`/mother-board`;
    console.log(productUrl);

    return this.httpClient.get(`${this.baseUrl}`+`/mother-board`);
  } 
}
