import { InMemoryDbService } from 'angular-in-memory-web-api';

import { employee } from './employee';

export class EmployeeData implements InMemoryDbService {

  createDb() {
    const employee: employee[] = [
      {
        id:1,
        name:'ujjwal',
        email:'a@gmail.com',
        dob:new Date('06-02-1998'),
        doj:new Date('20-03-2020'),
        password:'123'
      },
      {
        id:2,
        name:'vipul',
        email:'vipul@gmail.com',
        dob:new Date('06-02-1998'),
        doj:new Date('20-03-2020'),
        password:'123'
      },
      {
        id:3,
        name:'hitman',

        email:'hit@gmail.com',
        dob:new Date('06-02-1998'),
        doj:new Date('20-03-2020'),
        password:'123'
      }
    ];
    return { employee };
  }
}
