import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/authentication/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //
    /*
    check whetherbthe user is authenticated or not
    if yes
      return true
    else
      redirect to login page
      return false
    */

    if(this.authService.isAuth()){
      // we need to redirect the user to respond page
      return true;
    } else {
      this.router.navigate(['auth', 'login']);
      return false;
    }
  }
  
}
