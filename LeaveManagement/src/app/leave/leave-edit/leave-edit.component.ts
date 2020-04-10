import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveConfigService } from 'src/app/leave-config/leave-config.service';

@Component({
  selector: 'app-leave-edit',
  templateUrl: './leave-edit.component.html',
  styleUrls: ['./leave-edit.component.scss']
})
export class LeaveEditComponent implements OnInit {

  constructor(private leaveService:LeaveService,private router:Router,private route:ActivatedRoute,private leaveConfigService:LeaveConfigService) { }

  ngOnInit(): void {

  }
  applyLeave():void
  {
    
  }
}
