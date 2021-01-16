import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cpu } from 'MasterProject/src/app/common/products/cpu';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://13.127.23.111:8080/products';

  constructor(private httpClient: HttpClient) { }

  getProductList(productName:String): Observable<Cpu[]> {
    const productUrl = `${this.baseUrl}/${productName}`;
    return this.httpClient.get<GetResponse>(productUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  
}

interface GetResponse {
  _embedded: {
    products: Cpu[];
  }
}
