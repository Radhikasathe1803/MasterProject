import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Usecase } from '../common/usecase';
import { title } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() {}
  
  usecaseList  : Usecase []=[

 
new Usecase("For Student","assets/images/student.png","Students who want to build"),
new Usecase("For Video Editing","assets/images/video.jpg","Students who want to build"),
new Usecase("For Gaming","assets/images/gaming.jpg","Students who want to build"),
];



}
