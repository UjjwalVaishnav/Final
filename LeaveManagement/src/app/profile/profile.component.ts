import { Component, OnInit } from '@angular/core';
import { employee } from '../employee/employee';
import { EmployeeService } from '../employee/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  employee:employee={
    id:null,
    name:null,

    email:null,
    dob:null,
    doj:null,
    password:null
  }

  public id:number;
  constructor(private router:Router,private employeeService:EmployeeService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.employee.id=this.id;
    this.employeeService.getEmployee(this.id).subscribe(
      employee => {this.employee = employee}
    );
  }

}
