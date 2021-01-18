import { PowersupplyService } from './../../services/powersupply.service';
import { MotherBoardService } from './../../services/mother-board.service';
import { GraphicsCard } from './../../common/products/graphics-card';
import { GraphicCardService } from './../../services/graphic-card.service';
import { CpucoolerService } from './../../services/cpucooler.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CPU } from 'src/app/common/products/cpu';
import { Observable } from 'rxjs';
import { ProductConstants } from 'src/app/common/ProductConstants';
import { DataService } from 'src/app/services/data.service';
import { StorageService } from 'src/app/services/storage.service';


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
  constructor(private productService: ProductService,
     private dataService: DataService,private cpuCooler:CpucoolerService ,
     private graphicsCard:GraphicCardService,
     private  motherBoard:MotherBoardService,
     private powerSupply:PowersupplyService,private storage:StorageService) { }

  ngOnInit(): void {
    this.listProductCategories();
    this.type = this.dataService.getData();
    this.listProductCategories()
  }
  listProductCategories() {


    switch (this.type) {
      case ProductConstants.CORE_CPU:
        {
          this.productHead = ["name", "brand","color",
          "coreClock",
          "coreCount",
          "graphicsType",
         " integratedGraphics",
          "manufacturer",

          "price",
          "simMultiThread",
          "tdp",
        "isAvailable"
          ]
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

          this.productHead = ["fanRpm",
            "noiseLevel" ,
            "radiatorSize",]
          this.productObser = this.cpuCooler.getProductList();
          // this.productObser.forEach(p => );


        }
        break;
      case ProductConstants.CORE_GPU:
        {
          this.productHead = [
           " chipset",
            "videoMemory",
           " coreClock",
            "boostClock",
            "length",
           " thickNess"]
          this.productObser = this.graphicsCard.getProductList();
        }
        break;
      case ProductConstants.CORE_MOBO:
        {
          this.productHead = [ "maxMemory",
            "memorySlots",
            "chipset","socket"]
          this.productObser = this.motherBoard.getProductList();
        }
        break;
      case ProductConstants.CORE_MONITOR:
        {
          /* this.productHead = ["name", "core-count"]
          this.productObser = this.productService.getProductList(); */
        }
        break;
      case ProductConstants.CORE_MONITOR:
        {
          /* this.productHead = ["name", "core-count"]
          this.productObser = this.productService.getProductList(); */
        }
        break;
      case ProductConstants.CORE_PSU:
        {
          this.productHead = [
           " formFactor",
           " wattage"]
          this.productObser = this.powerSupply.getProductList();
        }
        break;
      case ProductConstants.CORE_RAM:
        {
          /* this.productHead = ["name", "core-count"]
          this.productObser = this.productService.getProductList(); */
        }
        break;
      case ProductConstants.CORE_STORAGE:
        {
          this.productHead = ["capacity",
            "type",
            "cache",
            "formFactor",
           " interFace",
           " pricePerGb"]
          this.productObser = this.storage.getProductList();
        }
        break;


    }
  }

  cpucall() {

  }
}
