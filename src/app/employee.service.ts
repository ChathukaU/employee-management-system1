import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface EmployeeResponse {
    "id": number
    "imageUrl": string
    "firstName": string
    "lastName": string
    "email": string
    "contactNumber": string
    "age": number
    "dob": string
    "salary": string
    "address": string
  }


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getEmployees() {
    return this.httpClient.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001');
  }
}
