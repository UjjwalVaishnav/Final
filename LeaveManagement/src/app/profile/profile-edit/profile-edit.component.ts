import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/employee/employee';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee/employee.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

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


        this.employeeService.updateEmployee(this.employee).subscribe({
          next: () => this.router.navigate(['/profile/2']),
          error: err => console.log('error')
        });


  }

}
