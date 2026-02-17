import { Component } from '@angular/core';
import { EmployeeCreate,Employee } from './employee-create/employee-create';
import { Employees } from './employees/employees';

@Component({
  selector: 'app-root',
  imports: [Employees, EmployeeCreate],
  template: `
    <app-employee-create (myEvent)="save($event)" />
    <hr />
    <app-employees [employes]="employees" />
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
