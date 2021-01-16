import { MatTableDataSource } from '@angular/material/table';
import {Component, OnDestroy, OnInit} from '@angular/core';

export interface PeriodicElement {
  name: String;
  position: number;
  weight: number;
  symbol: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}

@Component({
  selector: 'app-pc-components',
  templateUrl: './pc-components.component.html',
  styleUrls: ['./pc-components.component.css']
})
export class PcComponentsComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
 // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

      ngOnInit(): void {   
    }
      applyFilter(filterValue: string){
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
