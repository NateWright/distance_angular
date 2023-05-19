import { Component, OnInit } from '@angular/core';
import { BatteryLevelService } from './battery-level.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'distance_angular';
  test = "";

  constructor(public batterLevel: BatteryLevelService){}
  ngOnInit(): void {
   console.log(this.batterLevel.value())
  }


}
