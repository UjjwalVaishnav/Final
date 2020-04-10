import { Component, OnInit } from '@angular/core';
import { leaveConfig } from '../leaveConfig';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveConfigService } from '../leave-config.service';

@Component({
  selector: 'app-leave-config-edit',
  templateUrl: './leave-config-edit.component.html',
  styleUrls: ['./leave-config-edit.component.scss']
})
export class LeaveConfigEditComponent implements OnInit {

  leaveConfig:leaveConfig={
    id:null,
    name:null,
    maximumLeavesAllowed:null
  }
  public id:number;
  constructor(private router:Router,private leaveConfigService:LeaveConfigService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.leaveConfig.id=this.id;
    this.leaveConfigService.getLeaveConfig(this.id).subscribe(
      leaveConfig => {this.leaveConfig = leaveConfig}
    );
  }
  saveLeaveConfig():void{
    if (this.id === 0) {
      this.leaveConfigService.addLeaveConfig(this.leaveConfig).subscribe({
        next: () => this.router.navigate(['/leaveConfig']),
        error: err => console.log('error')
      });
    } else {
      this.leaveConfigService.updateLeaveConfig(this.leaveConfig).subscribe({
        next: () => this.router.navigate(['/leaveConfig']),
        error: err => console.log('error')
      });
    }
  }
}
