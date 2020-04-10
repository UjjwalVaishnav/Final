import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { leaveConfig } from './leaveConfig';

@Injectable({
  providedIn: 'root'
})
export class LeaveConfigService {

  readonly leaveUrl='http://localhost:62010/api/Leaves';

  constructor(private http:HttpClient) { }

  getLeaveConfigs(): Observable<leaveConfig[]> {
    return this.http.get<leaveConfig[]>(this.leaveUrl)
      .pipe(tap(data => console.log(JSON.stringify(data))));
  }

  getLeaveConfig(id: number): Observable<leaveConfig> {
    if (id === 0) {
      return of(this.initializeLeaveConfig());
    }
    const url = `${this.leaveUrl}/${id}`;
    return this.http.get<leaveConfig>(url)
      .pipe(
        tap(data => console.log('getLeaveConfig: ' + JSON.stringify(data)))
      );
  }

  addLeaveConfig(leaveConfig:leaveConfig): Observable<leaveConfig>{
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // leaveConfig.id = null;
    return this.http.post<leaveConfig>(this.leaveUrl, leaveConfig)
    .pipe(tap(data => console.log('createLeaveConfig: ' + JSON.stringify(data)))
    );
  }

  updateLeaveConfig(leaveConfig: leaveConfig):Observable<leaveConfig> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.leaveUrl}/${leaveConfig.id}`;
    return this.http.put<leaveConfig>(url, leaveConfig, { headers })
      .pipe(tap(() => console.log('updateLeaveConfig: ' + leaveConfig.id)),
        map(() => leaveConfig)
      );
  }

  deleteLeaveConfig(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.leaveUrl}/${id}`;
    return this.http.delete<leaveConfig>(url, { headers })
      .pipe(tap(data => console.log('deleteLeaveConfig: ' + id))
      );
  }
  private initializeLeaveConfig(): leaveConfig {
    // Return an initialized object
    return {
      id: 0,
      name: null,
      maximumLeavesAllowed:0
    };
  }
}
