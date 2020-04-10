export interface leaveConfig{
  id:number;
  name:string;
  maximumLeavesAllowed:number;
}

export interface LeaveConfigResolved {
  leaveConfig: leaveConfig;
  error?: any;
}
