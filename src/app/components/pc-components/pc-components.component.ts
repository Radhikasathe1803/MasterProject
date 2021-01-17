import { MatTableDataSource } from '@angular/material/table';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CPU } from 'src/app/common/products/cpu';
import { Observable } from 'rxjs';
import { ProductConstants } from 'src/app/common/ProductConstants';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-pc-components',
  templateUrl: './pc-components.component.html',
  styleUrls: ['./pc-components.component.css']
})
export class PcComponentsComponent implements OnInit {

  productObser: Observable<any[]>;
  productHead = [];
  data = [];

  type: String;
  constructor(private productService: ProductService, private dataService: DataService) { }

  ngOnInit(): void {
    this.listProductCategories();
    this.type = this.dataService.getData();
    this.listProductCategories()
  }
  listProductCategories() {


    switch (this.type) {
      case ProductConstants.CORE_CPU:
        {
          this.productHead = ["name", "core-count"]
          this.productObser = this.productService.getProductList();
          // this.productObser.subscribe((p) => {
          //   console.log(p);
          // });



        }
        break;
      case ProductConstants.CORE_CASE:
        {

        }
        break;
      case ProductConstants.CORE_COOLER:
        {

          this.productHead = ["name", "core-count"]
          this.productObser = this.productService.getProductList();
          // this.productObser.forEach(p => );


        }
        break;
      case ProductConstants.CORE_GPU:
        {

        }
        break;
      case ProductConstants.CORE_MOBO:
        {

        }
        break;
      case ProductConstants.CORE_MONITOR:
        {

        }
        break;
      case ProductConstants.CORE_MONITOR:
        {

        }
        break;
      case ProductConstants.CORE_PSU:
        {

        }
        break;
      case ProductConstants.CORE_RAM:
        {

        }
        break;
      case ProductConstants.CORE_STORAGE:
        {

        }
        break;


    }
  }

  cpucall() {

  }
}
