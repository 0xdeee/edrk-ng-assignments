import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee2 } from '../model/employee2.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css'],
})
export class NewEmployeeComponent implements OnInit {
  isError: boolean;
  errorResponse: string;
  errorExplanation: string;
  employeeList: Employee2[];
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe(
      (response) => {
        // console.log(response);
        this.employeeList = response.data;
        // console.log(this.employeeList);
        this.isError = false;
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
        this.isError = true;
        this.errorResponse = error.error.message;
        this.errorExplanation = error.message;
      }
    );
  }
}
