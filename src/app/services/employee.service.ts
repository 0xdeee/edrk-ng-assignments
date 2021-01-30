import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Employee2 } from '../model/employee2.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'https://dummy.restapiexample.com/api/v1/employees';
  }
  getEmployeeList(): Observable<any> {
    return this.http.get(this.URL).pipe(
      map((res) => {
        // console.log(res);
        return res;
      }),
      catchError((error) => {
        // console.log(error);
        return throwError(error);
      })
    );
  }
}
