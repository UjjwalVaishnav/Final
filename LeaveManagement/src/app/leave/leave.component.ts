import { Component, OnInit } from '@angular/core';
import { leave } from './leave';
import { LeaveService } from './leave.service';
import { Router } from '@angular/router';
import { LeaveConfigService } from '../leave-config/leave-config.service';
import { leaveConfig } from '../leave-config/leaveConfig';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {

  leaves:leave[]=[];
  leaveConfig:leaveConfig[]=[];
  constructor(private leaveService:LeaveService,private router:Router,private leaveConfigService:LeaveConfigService) { }
  id:number;
  ngOnInit(): void {
    this.id=Number(localStorage.getItem("id"));
    this.leaveService.getLeaves().subscribe(
      leave=>{this.leaves=leave
        
      //console.log(leave)
    }
    );
    this.leaveConfigService.getLeaveConfigs().subscribe(
      leaveConfig=>{this.leaveConfig=leaveConfig}
    );
    console.log(this.leaveConfig);

  }

}
