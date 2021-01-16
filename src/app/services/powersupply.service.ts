import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PowersupplyService {

  private baseUrl = 'http://13.127.23.111:8080/products';

  constructor(private httpClient: HttpClient) { }

  getProductList():  Observable<any>  {
    const productUrl = `${this.baseUrl}`+`/cpu`;
    console.log(productUrl);

    return this.httpClient.get(`${this.baseUrl}`+`/cpu`);


}
}
