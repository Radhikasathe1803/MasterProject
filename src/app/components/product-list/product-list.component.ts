import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { UsecaseService } from './../../services/usecase.service';
import { Usecase } from './../../common/usecase';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-list',
/*   templateUrl: './product-list-grid.component.html', */
  // templateUrl: './product-list-table.component.html',
   templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
//array of product class
  products: Observable<any[]>;
//service injection
  constructor(private usecaseService:UsecaseService,
    private dataService:DataService,
    private router: Router) { }

  ngOnInit() {
    this.listProducts();
  }

  listProducts() {

    this.products=
     this.usecaseService.getSystemByBrand
     (this.dataService.getData())


  }
  public selected(value) {
    // this.type = data;
    this.dataService.setData(value)
    this.router.navigateByUrl('/addcomponent')
  }

}
