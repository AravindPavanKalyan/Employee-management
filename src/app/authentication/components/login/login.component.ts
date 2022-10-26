import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NavigationHelper } from 'src/app/shared/utils/navigation-helper';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    public navigationHelper: NavigationHelper,
    private router: Router,
    private activatedRoute: ActivatedRoute
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
          sessionStorage.setItem('authToken', res.token);
          // post login redirect to the return url
          const redirectTo =
            this.activatedRoute.snapshot.queryParams['redirectTo'];
          // console.log('redirectTo', redirectTo);
          this.toastr.success('Login successful');
          this.router.navigateByUrl(redirectTo);
        }
      },
      error: (error: any) => {
        console.log('error in comp', error);
        this.toastr.error('Email or password is incorrect');
      },
    });
  }
}
