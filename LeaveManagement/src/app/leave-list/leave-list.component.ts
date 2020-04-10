import { Component, OnInit } from '@angular/core';
import { leave } from '../leave/leave';
import { LeaveService } from '../leave/leave.service';
import { EmployeeService } from '../employee/employee.service';
import { employee } from '../employee/employee';
import { leaveConfig } from '../leave-config/leaveConfig';
import { LeaveConfigService } from '../leave-config/leave-config.service';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.scss']
})
export class LeaveListComponent implements OnInit {

  constructor(private leaveConfigService:LeaveConfigService ,private leaveService:LeaveService,private employeeService:EmployeeService) { }
  leaves:leave[]=[];
  employee:employee[]=[];
  leaveConfig:leaveConfig[]=[];
  //name:string[];
  ngOnInit(): void {
    this.leaveService.getLeaves().subscribe(
      leave=>{this.leaves=leave
    }
    );
    this.employeeService.getEmployees().subscribe(
      employee => {this.employee = employee}
    );
      this.leaveConfigService.getLeaveConfigs().subscribe(
        leaveConfig=>{this.leaveConfig=leaveConfig}
      );
      // for(var i=0;i<this.leaves.length;i++)
      // {
      //   for(var j=0;j<=i;j++)
      //   {
      //     if(this.leaves[i].employeeId===this.employee[j].id)
      //     {
      //       this.name[i]=this.employee[j].name;
      //     }
      //   }
      // }
  }

}
