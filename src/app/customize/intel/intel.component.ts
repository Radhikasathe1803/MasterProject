import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-intel',
  templateUrl: './intel.component.html',
  styleUrls: ['./intel.component.css']
})
export class IntelComponent{

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          
          { title: 'Card 1', cols: 3, rows: 1 },
          { title: 'Card 2', cols: 3, rows: 1 },
          { title: 'Card 3', cols: 3, rows: 1 },
          { title: 'Card 4', cols: 3, rows: 1 },
          { title: 'Card 5', cols: 3, rows: 1 },
        ];
      }

      return [
       
        { title: 'Card 1', cols: 3, rows: 1 },
        { title: 'Card 2', cols: 3, rows: 1 },
        { title: 'Card 3', cols: 3, rows: 1 },
        { title: 'Card 4', cols: 3, rows: 1 },
        { title: 'Card 5', cols: 3, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
