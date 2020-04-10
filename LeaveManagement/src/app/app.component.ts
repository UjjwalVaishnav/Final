import { Component } from '@angular/core';
import { EmployeeService } from './employee/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Leave Management';
  display='none';
}
