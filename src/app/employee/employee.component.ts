import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  employee: Employee;
  constructor() {}

  ngOnInit(): void {
    this.employee = {
      eid: 0,
      eFirstname: 'Enter Your name',
      eLastname: 'Enter your surname',
      eDept: 'Enter your Department',
      eCity: 'Enter your City',
      eEmail: 'Enter yout Email',
    };

    this.employees = [
      {
        eid: 1001,
        eFirstname: 'Jake',
        eLastname: 'Peralta',
        eDept: 'HR',
        eCity: 'New York',
        eEmail: 'jake@company.com',
      },
      {
        eid: 1002,
        eFirstname: 'Amy',
        eLastname: 'Santiago',
        eDept: 'Operations',
        eCity: 'New york',
        eEmail: 'amy@company.com',
      },
      {
        eid: 1003,
        eFirstname: 'Charles',
        eLastname: 'Boyle',
        eDept: 'HR',
        eCity: 'New York',
        eEmail: 'charles@company.com',
      },
      {
        eid: 1004,
        eFirstname: 'Gina',
        eLastname: 'Linetti',
        eDept: 'PR',
        eCity: 'New York',
        eEmail: 'gina@company.com',
      },
      {
        eid: 1005,
        eFirstname: 'Rosa',
        eLastname: 'Diaz',
        eDept: 'Operations',
        eCity: 'New York',
        eEmail: 'rosa@company.com',
      },
      {
        eid: 1006,
        eFirstname: 'Raymond',
        eLastname: 'Holt',
        eDept: 'Management',
        eCity: 'New York',
        eEmail: 'ray@company.com',
      },
      {
        eid: 1007,
        eFirstname: 'Norm',
        eLastname: 'Scully',
        eDept: 'Ops',
        eCity: 'New York',
        eEmail: 'scully@company.com',
      },
      {
        eid: 1008,
        eFirstname: 'John',
        eLastname: 'Hitchcock',
        eDept: 'Ops',
        eCity: 'New York',
        eEmail: 'hitch@company.com',
      },
    ];
  }

  UpdateEmp(): void {
    this.employees.push(this.employee);
  }

  editEmp(employee: Employee): void {
    this.employee = employee;
  }
}
