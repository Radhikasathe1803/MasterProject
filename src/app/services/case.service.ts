import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductConstants } from '../common/ProductConstants';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  private baseUrl = `${ProductConstants.BASE_URL}${ProductConstants.PRODUCT_ENDPOINT}/${ProductConstants.CORE_CASE}`

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<any> {
    const productUrl = `${this.baseUrl}`;
    console.log(productUrl);

    return this.httpClient.get(productUrl);
  }
}
