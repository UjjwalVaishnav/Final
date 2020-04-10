import { InMemoryDbService } from 'angular-in-memory-web-api';

import { leaveConfig } from './leaveConfig';

export class EmployeeData implements InMemoryDbService {

  createDb() {
    const leaveConfig: leaveConfig[] = [
      {
        id:1,
        name:'Casual Leave',
        maximumLeavesAllowed:14
      },
      {
        id:2,
        name:' Sick Leave',
        maximumLeavesAllowed:10
      },
      {
        id:3,
        name:' Restricted Leave',
        maximumLeavesAllowed:10
      }
    ];
    return { leaveConfig };
  }
}
