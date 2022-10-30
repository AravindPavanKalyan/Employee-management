import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IEmployee } from '../models/iemployee';

@Injectable({
  providedIn: 'root', // This tells Angular to provide the service in the application root level
  // and the service will be created once (singleton service ) and
  // provide the same instance in every module that injects this class.
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  createEmployee(formData: any) {
    // 1. get theform datda from comp
    console.log(formData);

    // 2. send the form data to the REST API
    //2.1 what's the REST API URL? https://jsonplaceholder.typicode.com/users
    // 2.2 what's the Http Method? POST
    // 2.3 what's the REST API Client Tool? HttpClient
    return this.http.post(environment.employeeRestApi, formData).pipe(
      map((res: any) => {
        // 3. get theres from the REST API
        console.log(res);
        // 4. send the res to the comp
        return res;
      })
    );
    // 3. get theres from the REST API
    // 4. send the res to the comp
  }

  //list employees
  getEmployees(): Observable<IEmployee[]> {
    // 1.get the req from comp
    // 2. send the form data to the REST API
    //2.1 what's the REST API URL? https://jsonplaceholder.typicode.com/users
    // 2.2 what's the Http Method? POST
    // 2.3 what's the REST API Client Tool? HttpClient
    return this.http.get<IEmployee[]>(environment.employeeRestApi).pipe(
      map((res: IEmployee[]) => {
        // 3. get the res
        console.log('IEmployee', res);
        // 4. send the res to comp
        return res;
      })
    );
  }

  getEmployeeById(empId: string | null) {
    console.log('will load data for' + empId);
    const restApiUrl = `${environment.employeeRestApi}/${empId}`;
    return this.http.get(restApiUrl).pipe(
      map((res: any) => {
        console.log(res);
        return res;
      })
    );
  }

  updateEmployee(formData: any) {
    // 1. get theform datda from comp
    console.log(formData);

    // 2. send the form data to the REST API
    //2.1 what's the REST API URL? https://jsonplaceholder.typicode.com/users
    // 2.2 what's the Http Method? POST
    // 2.3 what's the REST API Client Tool? HttpClient
    return this.http
      .put(`${environment.employeeRestApi}/${formData.id}`, formData)
      .pipe(
        map((res: any) => {
          // 3. get theres from the REST API
          console.log(res);
          // 4. send the res to the comp
          return res;
        })
      );
    // 3. get theres from the REST API
    // 4. send the res to the comp
  }

  deleteEmployee(empId: any) {
    // 1. get theform datda from comp

    // 2. send the form data to the REST API
    //2.1 what's the REST API URL? ${environment.employeeRestApi}/${formData.id}
    // 2.2 what's the Http Method? POST
    // 2.3 what's the REST API Client Tool? HttpClient
    return this.http.delete(`${environment.employeeRestApi}/${empId}`).pipe(
      map((res: any) => {
        // 3. get theres from the REST API
        console.log(res);
        // 4. send the res to the comp
        return res;
      })
    );
    // 3. get theres from the REST API
    // 4. send the res to the comp
  }
}
