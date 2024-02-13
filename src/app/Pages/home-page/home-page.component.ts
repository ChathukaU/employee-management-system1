import { Component } from '@angular/core';
import { EmployeeService, EmployeeResponse } from '../../employee.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private employeeService: EmployeeService) { }

  employees!: EmployeeResponse[];

  ngOnInit() {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.employeeService.getEmployees().subscribe((res:any) => {
      this.employees = res;
    });
  }
}
