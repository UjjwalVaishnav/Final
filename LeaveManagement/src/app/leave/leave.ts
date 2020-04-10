export interface leave{
  id:number;
  employeeId:number;
  leaveId:number;
  leaveStartDate:Date;
  leaveEndDate:Date;
  status:string;
}

export interface LeaveConfigResolved {
  leaveConfig: leave;
  error?: any;
}
