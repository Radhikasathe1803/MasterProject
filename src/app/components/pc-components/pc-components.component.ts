import { CPU } from './../../common/products/cpu';
import { PowersupplyService } from './../../services/powersupply.service';
import { MotherBoardService } from './../../services/mother-board.service';
import { GraphicsCard } from './../../common/products/graphics-card';
import { GraphicCardService } from './../../services/graphic-card.service';
import { CpucoolerService } from './../../services/cpucooler.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

import { Observable } from 'rxjs';
import { ProductConstants } from 'src/app/common/ProductConstants';
import { DataService } from 'src/app/services/data.service';
import { StorageService } from 'src/app/services/storage.service';
import { CaseService } from 'src/app/services/case.service';


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
  constructor(private productService: ProductService,private router: Router,
    private dataService: DataService, private cpuCooler: CpucoolerService,
    private graphicsCard: GraphicCardService, private caseservice: CaseService,
    private motherBoard: MotherBoardService,
    private powerSupply: PowersupplyService, private storage: StorageService) { }

  ngOnInit(): void {
    this.listProductCategories();
    this.type = this.dataService.getData();
    this.listProductCategories()
  }
  listProductCategories() {

    console.log(this.type)
    switch (this.type) {
      case ProductConstants.CORE_CPU:
        {
          this.productHead = ["id","image", "name", "brand",  "coreClock", "coreCount", "graphicsType",
            "integratedGraphics", "manufacturer", "price", "simMultiThread", "tdp", "Available"
          ]
          this.productObser = this.productService.getProductList();
          // this.productObser.subscribe((p) => {
          //   console.log(p);
          // });
          

        }
        break;
      case ProductConstants.CORE_CASE:
        {
          console.log("in  case");
          this.productHead = ["id", "image","available","brand","color",
          "externalBay","internalBay","name","powerSupply","price","sidePanelType","type"]
          this.productObser = this.caseservice.getProductList();
          // this.productObser.forEach(p => );
          this.productObser.subscribe((p) => {
            console.log(p);
          });
        }
        break;
      case ProductConstants.CORE_COOLER:
        {

          this.productHead = ["id","image", "fanRpm", "noiseLevel", "radiatorSize",]
          this.productObser = this.cpuCooler.getProductList();
          // this.productObser.forEach(p => );
          this.productObser.subscribe((p) => {
            console.log(p);
          });

        }
        break;
      case ProductConstants.CORE_GPU:
        {
          this.productHead = ["id","image", "chipset", "videoMemory", "coreClock", "boostClock", "length", "thickNess"]
          this.productObser = this.graphicsCard.getProductList();
        }
        break;
      case ProductConstants.CORE_MOBO:
        {
          this.productHead = ["id","image", "socket", "FormFactor", "maxMemory", "memorySlots", "chipset"]
          this.productObser = this.motherBoard.getProductList();
        }
        break;
      case ProductConstants.CORE_MONITOR:
        {
          this.productHead = ["id","image", " screenSize", "resultion", "refreshRate", "responseTime", "MonitorPanelType", "aspectRatio"]
          this.productObser = this.powerSupply.getProductList();
        }
        break;
      case ProductConstants.CORE_PSU:
        {
          this.productHead = ["id","image", "name","formFactor","wattage","efficiency","modular","price"]
          this.productObser = this.powerSupply.getProductList();
        }
        break;
      case ProductConstants.CORE_RAM:
        {
          this.productHead = ["id","image","name","noOfSticks","price","ramSize","speed","totalSize","type"]
          this.productObser = this.powerSupply.getProductList();
        }
        break;
      case ProductConstants.CORE_STORAGE:
        {
          this.productHead = ["id","image", "capacity", "type", "cache", "formFactor", " interFace", " pricePerGb"]
          this.productObser = this.storage.getProductList();
        }
        break;


    }
  }
<<<<<<< HEAD

  /* cpucall() {

  } */

  /* addToCart()
  {
    console.log('Adding to carts: ${p.name},${p.price}');

  } */
=======
name: string;
public performSearch(key,value) {
  // this.type = data;
  this.dataService.setComponent(key,value);
  this.router.navigateByUrl('/cutomize_intel');
}
>>>>>>> e3bfbeb3e964e52f30be1beb7d614d74352b87f1
}
