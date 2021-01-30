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
  oldEmpTableToggle = false;
  oldEmpFormToggle = false;
  constructor() {}

  ngOnInit(): void {
    this.employee = {
      eid: 0,
      eFirstname: 'Enter Your name',
      eLastname: 'Enter your surname',
      eDept: 'Enter your Dept',
      eCity: 'Enter your City',
      eEmail: 'Enter your Email',
      eSalary: 0,
      eDOB: null,
    };

    this.employees = [
      {
        eid: 1001,
        eFirstname: 'Jake',
        eLastname: 'Peralta',
        eDept: 'HR',
        eCity: 'New York',
        eEmail: 'jake@company.com',
        eSalary: 100000,
        eDOB: new Date(),
      },
      {
        eid: 1002,
        eFirstname: 'Amy',
        eLastname: 'Santiago',
        eDept: 'Operations',
        eCity: 'New york',
        eEmail: 'amy@company.com',
        eSalary: 100000,
        eDOB: new Date(),
      },
      {
        eid: 1003,
        eFirstname: 'Charles',
        eLastname: 'Boyle',
        eDept: 'HR',
        eCity: 'New York',
        eEmail: 'charles@company.com',
        eSalary: 10000,
        eDOB: new Date(),
      },
      {
        eid: 1004,
        eFirstname: 'Gina',
        eLastname: 'Linetti',
        eDept: 'PR',
        eCity: 'New York',
        eEmail: 'gina@company.com',
        eSalary: 10000,
        eDOB: new Date(),
      },
      {
        eid: 1005,
        eFirstname: 'Rosa',
        eLastname: 'Diaz',
        eDept: 'Operations',
        eCity: 'New York',
        eEmail: 'rosa@company.com',
        eSalary: 1000,
        eDOB: new Date(),
      },
      {
        eid: 1006,
        eFirstname: 'Raymond',
        eLastname: 'Holt',
        eDept: 'Management',
        eCity: 'New York',
        eEmail: 'ray@company.com',
        eSalary: 1000000,
        eDOB: new Date(),
      },
      {
        eid: 1007,
        eFirstname: 'Norm',
        eLastname: 'Scully',
        eDept: 'Ops',
        eCity: 'New York',
        eEmail: 'scully@company.com',
        eSalary: 100,
        eDOB: new Date(),
      },
      {
        eid: 1008,
        eFirstname: 'Michel',
        eLastname: 'Hitchcock',
        eDept: 'Ops',
        eCity: 'New York',
        eEmail: 'hitch@company.com',
        eSalary: 100,
        eDOB: new Date(),
      },
    ];
  }

  UpdateEmp(): void {
    this.employees.push(this.employee);
  }

  editEmp(employee: Employee): void {
    this.employee = employee;
  }

  oldEmpTableToggleFn(): void {
    this.oldEmpTableToggle = !this.oldEmpTableToggle;
  }

  oldEmpFormToggleFn(): void {
    this.oldEmpFormToggle = !this.oldEmpFormToggle;
  }
}
