import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { HttpClientModule } from '@angular/common/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeeData } from './employee/employee-data';
import { FormsModule } from '@angular/forms';
import { LeaveConfigComponent } from './leave-config/leave-config.component';
import { LeaveConfigEditComponent } from './leave-config/leave-config-edit/leave-config-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { LoginComponent } from './login/login.component';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LeaveComponent } from './leave/leave.component';
import { LeaveEditComponent } from './leave/leave-edit/leave-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeEditComponent,
    LeaveConfigComponent,
    LeaveConfigEditComponent,
    ProfileComponent,
    ProfileEditComponent,
    LoginComponent,
    LeaveListComponent,
    AdminComponent,
    UserComponent,
    LeaveComponent,
    LeaveEditComponent,
    //AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
