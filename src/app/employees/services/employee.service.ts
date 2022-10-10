import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor( private http: HttpClient) { }

  createEmployee(formData: any) {
    // 1. get theform datda from comp
    console.log(formData);

    // 2. send the form data to the REST API
    //2.1 what's the REST API URL? https://jsonplaceholder.typicode.com/users
    // 2.2 what's the Http Method? POST
    // 2.3 what's the REST API Client Tool? HttpClient
    return this.http
      .post('https://jsonplaceholder.typicode.com/users', formData)
      .pipe(
        map((res: any) => {
          // 3. get theres from the REST API
          console.log(res);
          // 4. send the res to the comp
          return resizeBy;
        })
      );
    // 3. get theres from the REST API
    // 4. send the res to the comp
  }
}
