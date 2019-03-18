import { Component } from '@angular/core';
import { LogstatusService } from '../services/logstatus.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  logStatus:boolean;

  constructor(private log:LogstatusService){
       this.logStatus=this.log.getStatus();
  }
}
