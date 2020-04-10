import { Component, OnInit } from '@angular/core';
import { leaveConfig } from './leaveConfig';
import { LeaveConfigService } from './leave-config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-config',
  templateUrl: './leave-config.component.html',
  styleUrls: ['./leave-config.component.scss']
})
export class LeaveConfigComponent implements OnInit {

  leaveConfigs:leaveConfig[]=[];
  leave:leaveConfig;
  constructor(private leaveConfigService:LeaveConfigService,private router:Router) { }

  ngOnInit(): void {
    this.leaveConfigService.getLeaveConfigs().subscribe(
      leaveConfig => {this.leaveConfigs = leaveConfig}
    );
  }

  deleteLeaveConfig(id:number): void {
    if (confirm(`Really delete the Leave?`)) {
     this.leaveConfigService.deleteLeaveConfig(id).subscribe(
      () => console.log('Deleted'),
     );
     this.ngOnInit();
    }
  }

  getLeaveConfig(id: number): void {
    this.leaveConfigService.getLeaveConfig(id).subscribe(
      leaveConfig => this.onLeaveConfigRetrieved(leaveConfig)
    );
  }
  onLeaveConfigRetrieved(leaveConfig: leaveConfig): void {
    this.leave=leaveConfig;
  }

}
