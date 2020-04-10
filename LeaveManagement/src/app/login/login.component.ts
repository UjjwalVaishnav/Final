import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee/employee.service';
import { employee } from '../employee/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  employees:employee[]=[];
  email:string=null;
  password:String=null;
  constructor(private router:Router,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      employee => {this.employees = employee}
    );
  }
  login():void{
    if(this.email==="admin@gmail.com" && this.password==="admin")
    {
      console.log(this.email+" "+this.password);
      this.router.navigate(['/employees']);

    }
    for(var i=0;i<this.employees.length;i++)
    {
      //console.log(this.employees[i]);
      if(this.employees[i].email===this.email && this.employees[i].password===this.password)
      {
        console.log(this.employees[i]);
        localStorage.setItem("id",this.employees[i].id.toString());
        this.router.navigate(['/profile/'+this.employees[i].id]);
      }
    }
  }

}
