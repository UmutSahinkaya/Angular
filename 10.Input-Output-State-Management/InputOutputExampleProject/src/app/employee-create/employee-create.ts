import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

export class Employee {
    name:string="";
    surname:string="";
    dateOfBirth:string="";
}

@Component({
  selector: 'app-employee-create',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './employee-create.html',
  styleUrls: ['./employee-create.css'],
})
export class EmployeeCreate {
  employee = new Employee();

  @Output() myEvent=new EventEmitter<Employee>();

  save(){
    this.myEvent.emit(this.employee);
    this.employee=new Employee();
  } 
}
