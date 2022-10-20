import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthentication } from '../models/iauthentication';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signupUser(formData: IAuthentication) {
    console.log('received in auth service', formData);

    return this.http.post(environment.signupRestApi, formData).pipe(
      map((res: any) => {
        // 3. get theres from the REST API
        console.log('res in authService', res);
        // 4. send the res to the comp
        return res;
      }),
      catchError((error: any) => {
        throw error;
      })
    );
  }

  loginRequest(formData: IAuthentication) {
    console.log('service', formData);

    return this.http.post(environment.loginRestApi, formData).pipe(
      map((res: any) => {
        // 3. get theres from the REST API
        console.log('qwerty', res);
        // 4. send the res to the comp
        return res;
      }),
      catchError((error: any) => {
        throw error;
      })
    );
  }
}