import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { employee } from './employee';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly empUrl='http://localhost:62010/api/Employees';

  
  constructor(private http:HttpClient) { }

  public getEmployees(): Observable<employee[]> {
   // debugger;
   return this.http.get<any>(this.empUrl);

  }

  public getEmployee(id: number): Observable<employee> {
    if (id === 0) {
      return of(this.initializeEmployee());
    }
    const url = `${this.empUrl}/${id}`;
    return this.http.get<employee>(url)
      .pipe(
        tap(data => console.log('getProduct: ' + JSON.stringify(data)))
      );
  }

  addEmployee(employee:employee): Observable<employee>{
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // employee.id = null;
    return this.http.post<any>(this.empUrl, employee)
    .pipe(tap(data => console.log('createEmployee: ' + JSON.stringify(data)))
    );
  }

  updateEmployee(employee: employee):Observable<employee> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.empUrl}/${employee.id}`;
    return this.http.put<employee>(url, employee, { headers })
      .pipe(tap(() => console.log('updateEmployee: ' + employee.id)),
        map(() => employee)
      );
  }

  deleteEmployee(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.empUrl}/${id}`;
    return this.http.delete<employee>(url, { headers })
      .pipe(tap(data => console.log('deleteEmployee: ' + id))
      );
  }
  private initializeEmployee(): employee {
    // Return an initialized object
    return {
      id: 0,
      name: null,
      email:null,
      dob:null,
      doj:null,
      password:null
    };
  }
}
