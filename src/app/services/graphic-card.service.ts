import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GraphicCardService {

  private baseUrl ='http://13.233.86.9:8080/products';

  constructor(private httpClient: HttpClient) { }

  getProductList():  Observable<any>  {
    const productUrl = `${this.baseUrl}`+`/gpu`;
    console.log(productUrl);

    return this.httpClient.get(`${this.baseUrl}`+`/gpu`);
  }
}
