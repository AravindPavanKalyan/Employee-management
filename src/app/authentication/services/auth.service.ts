import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { NavigationHelper } from 'src/app/shared/utils/navigation-helper';
import { environment } from 'src/environments/environment';
import { IAuthentication } from '../models/iauthentication';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private navigationHelper: NavigationHelper) {}

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
        console.log('service res', res);
        // 4. send the res to the comp
        return res;
      }),
      catchError((error: any) => {
        throw error;
      })
    );
  }

  isAuth(): boolean {
    if (localStorage.getItem('authToken')) {
      return true;
    } else {
      return false;
    }
  }

  logoutReq() {
    localStorage.removeItem('authToken');
    this.navigationHelper.navigateTo('/auth/login');
  }
}
