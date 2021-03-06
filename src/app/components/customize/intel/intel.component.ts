import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { RamService } from 'src/app/services/ram.service';
import { constants } from 'buffer';
import { ProductConstants } from 'src/app/common/ProductConstants';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-intel',
  templateUrl: './intel.component.html',
  styleUrls: ['./intel.component.css']
})

export class IntelComponent  {
  type: String;
  selectedMap:Map<string,number> = new Map();
  constructor(private breakpointObserver: BreakpointObserver,
    private dataService: DataService,
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.selectedMap = this.dataService.getMap();
    if(this.selectedMap.get('cpu')!= undefined) {
      //selected
    }else{
      
    }
  }


  public selected(value) {
    // this.type = data;
    this.dataService.setData(value)
    this.router.navigateByUrl('/addcomponent')
  }

  // name = this.dataService.getComponent();
}
