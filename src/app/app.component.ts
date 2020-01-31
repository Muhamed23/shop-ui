import { Component, OnInit } from '@angular/core';
import { ShopmasterService } from './shopmaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}
  title = 'frontend';


  ngOnInit() {
  
  }

}
