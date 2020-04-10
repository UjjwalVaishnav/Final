export interface employee{
  id:number;
  name:string;
  email:string;
  dob:Date;
  doj:Date;
  password:string;
}
export interface EmployeeResolved {
  employee: employee;
  error?: any;
}
