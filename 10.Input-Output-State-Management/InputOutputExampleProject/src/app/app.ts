import { Component, Input } from '@angular/core';
import { EmployeeCreate } from './employee-create/employee-create';
import { Employees } from './employees/employees';
import { Employee } from './employees/employee';

@Component({
  selector: 'app-root',
  imports: [Employees, EmployeeCreate],
  template: `
    <app-employee-create (myEvent)="save($event)" />
    <hr />
    <app-employees [employees]="employees" />
  `,
})
export class App {
  employee = new Employee();
  employees: Employee[] = [];
  save(event: any) {
    this.employee = event;
    this.employees.push({...event});
  }
} 
