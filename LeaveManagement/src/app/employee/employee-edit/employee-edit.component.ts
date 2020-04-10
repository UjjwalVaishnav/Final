import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { EmployeeService } from '../employee.service';
//import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

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
  saveEmployee(): void {

      if (this.id === 0) {
        this.employeeService.addEmployee(this.employee).subscribe({
          next: () => this.router.navigate(['/employees']),
          error: err => console.log('error')
        });
      } else {
        this.employeeService.updateEmployee(this.employee).subscribe({
          next: () => this.router.navigate(['/employees']),
          error: err => console.log('error')
        });
      }

  }
}
