import { MatTableDataSource } from '@angular/material/table';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { ProductService } from 'MasterProject/src/app/services/product.service';
import { Cpu } from 'MasterProject/src/app/common/products/cpu';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pc-components',
  templateUrl: './pc-components.component.html',
  styleUrls: ['./pc-components.component.css']
})
export class PcComponentsComponent implements OnInit {


  cpu: Cpu[];

  constructor(private productService : ProductService,private router : Router) { }

      ngOnInit(): void {   
        this.listProductCategories();
    }
    listProductCategories() {
      this.productService.getProductList().subscribe(
        data => {
        //  console.log('Product Categories=' + JSON.stringify(data));
          this.cpu = data;
        });
      }
  
    studentsDetails(id: number){
      this.router.navigate(['students-details', id]);
    }
}
