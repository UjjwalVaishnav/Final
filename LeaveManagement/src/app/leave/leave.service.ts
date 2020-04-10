import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { leave } from './leave';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  readonly leaveUrl='http://localhost:62010/api/EmployeeLeaveMappings';

  constructor(private http:HttpClient) { }

  getLeaves(): Observable<leave[]> {
    return this.http.get<leave[]>(this.leaveUrl)
      .pipe(tap(data => console.log(JSON.stringify(data))));
  }

  getLeave(id: number): Observable<leave> {
    if (id === 0) {
      return of(this.initializeLeave());
    }
    const url = `${this.leaveUrl}/${id}`;
    return this.http.get<leave>(url)
      .pipe(
        tap(data => console.log('getLeave: ' + JSON.stringify(data)))
      );
  }

  addLeave(leave:leave): Observable<leave>{
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // leaveConfig.id = null;
    return this.http.post<leave>(this.leaveUrl, leave)
    .pipe(tap(data => console.log('createLeave: ' + JSON.stringify(data)))
    );
  }

  updateLeaveConfig(leave: leave):Observable<leave> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.leaveUrl}/${leave.id}`;
    return this.http.put<leave>(url, leave, { headers })
      .pipe(tap(() => console.log('updateLeave: ' + leave.id)),
        map(() => leave)
      );
  }

  deleteLeaveConfig(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.leaveUrl}/${id}`;
    return this.http.delete<leave>(url, { headers })
      .pipe(tap(data => console.log('deleteLeave: ' + id))
      );
  }
  private initializeLeave(): leave {
    // Return an initialized object
    return {
      id: 0,
      employeeId:null,
      leaveId:null,
      leaveEndDate:null,
      leaveStartDate:null,
      status:null
    };
  }
}
