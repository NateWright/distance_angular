import { Component } from '@angular/core';
import { BatteryLevelService } from './battery-level.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'distance_angular';

  constructor(public batterLevel: BatteryLevelService){}
}
