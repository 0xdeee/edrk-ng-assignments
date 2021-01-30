import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee2 } from '../model/employee2.model';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css'],
})
export class NewEmployeeComponent implements OnInit {
  employeeList: Employee2[];
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}
}
