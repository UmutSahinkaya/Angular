import { Component, Input } from '@angular/core';
import { Employee } from '../employee-create/employee-create';

@Component({
  selector: 'app-employees',
  imports: [],
  templateUrl: './employees.html',
  styleUrls: ['./employees.css'],
})
export class Employees {
  @Input() employes: Employee[] = [];
}
