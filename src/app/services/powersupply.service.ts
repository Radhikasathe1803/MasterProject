import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ProductConstants } from '../common/ProductConstants';

@Injectable({
  providedIn: 'root'
})
export class PowersupplyService {

  private baseUrl = `${ProductConstants.BASE_URL}${ProductConstants.PRODUCT_ENDPOINT}`

  constructor(private httpClient: HttpClient) { }

  getProductList():  Observable<any>  {
    const productUrl = `${this.baseUrl}`+`/power-supply`;
    console.log(productUrl);

    return this.httpClient.get(`${this.baseUrl}`+`/power-supply`);


}
}
