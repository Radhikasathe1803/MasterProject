import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Usecase } from '../../common/usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dataService:DataService,
    private router: Router) {}

  /* usecaseList  : Usecase []=[


new Usecase("For Student","assets/images/student.png","Students who want to build"),
new Usecase("For Video Editing","assets/images/video.jpg","Students who want to build"),
new Usecase("For Gaming","assets/images/gaming.jpg","Students who want to build"),
]; */

public selected(value) {
  // this.type = data;
  this.dataService.setData(value)
  this.router.navigateByUrl('/addcomponent')
}




}
