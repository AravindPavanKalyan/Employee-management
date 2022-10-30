import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { NavigationHelper } from 'src/app/shared/utils/navigation-helper';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  autoLogoutSubscription!: Subscription;
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    public navigationHelper: NavigationHelper,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bnIdle: BnNgIdleService
  ) {}

  ngOnInit(): void {}

  handleLogin(formData: NgForm) {
    console.log('data from comp', formData.value); // submitted data

    this.authService.loginRequest(formData.value).subscribe({
      next: (res: any) => {
        console.log('comp', res);
        if (res.token) {
          console.log('27', res);
          // lets save the token in cookies/local storage/ session storages
          localStorage.setItem('authToken', res.token);
          // post login redirect to the return url
          const redirectTo =
            this.activatedRoute.snapshot.queryParams['redirectTo'];
          // console.log('redirectTo', redirectTo);
          this.toastr.success('Login successful');
          this.router.navigateByUrl(redirectTo);
          this.autoLogoutSubscription = this.bnIdle.startWatching(600).subscribe((res) => {// idle time set to 600 secs for auto-logout
            if (res) {
              localStorage.removeItem('authToken');
              this.toastr.success('Last session timed out');
              this.navigationHelper.navigateTo('/auth/login');
            }
            this.autoLogoutSubscription.unsubscribe();
          });
        }
      },
      error: (error: any) => {
        console.log('error in comp', error);
        this.toastr.error('Email or password is incorrect');
      },
    });
  }

}
