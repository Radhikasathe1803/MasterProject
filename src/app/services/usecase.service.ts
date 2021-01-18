import { ProductConstants } from 'src/app/common/ProductConstants';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsecaseService {

 /*  http://localhost:8080/pc/byType?type=gaming */
  private baseUrl = `${ProductConstants.BASE_URL}/pc/byType`;

  constructor(private httpClient: HttpClient) {}

  getSystemByUse(use:string): Observable<any> {
    const productUrl = `${this.baseUrl}`;
    console.log(productUrl);

    return this.httpClient.get(`${this.baseUrl}?type=${use}`);
  }
  getSystemByPrice(start:number , end : number):Observable<any>{
    const productUrl = `${this.baseUrl}`;
    console.log(productUrl);
    /* /pc/inrange?start=4500.0&end=6000.0 */
    return this.httpClient.get(`${this.baseUrl}inRange?start=${start}&end=${end}`);
  }
  getSystemByBrand(brand:String):Observable<any>{
    const productUrl = `${this.baseUrl}`;
    console.log(productUrl);
    /* /pc/inrange?start=4500.0&end=6000.0 */
    return this.httpClient.get(`${this.baseUrl}/byBrand?brand=${brand}`);
  }
  getAllPc():Observable<any>{
    const productUrl= '${this.baseUrl}/pc'
    return this.httpClient.get('${this.baseUrl}')
  }
}

