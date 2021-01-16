import { MatTableDataSource } from '@angular/material/table';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CPU } from 'src/app/common/products/cpu';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pc-components',
  templateUrl: './pc-components.component.html',
  styleUrls: ['./pc-components.component.css']
})
export class PcComponentsComponent implements OnInit {

  cpu: Observable<CPU[]>;
  cpuhead=['name','coreClock']

  constructor(private productService : ProductService) { }

      ngOnInit(): void {   
        this.listProductCategories();
    }
    listProductCategories() {
     
      this.cpu = this.productService.getProductList();
      }

      cpucall(){

      }
}
