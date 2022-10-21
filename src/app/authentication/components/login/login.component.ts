import { Component, OnInit } from '@angular/core';
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
    public navigationHelper: NavigationHelper
  ) {}

  ngOnInit(): void {}

  handleLogin(formData: any) {
    console.log('data from comp', formData.value); // submitted data

    this.authService.loginRequest(formData.value).subscribe({
      next: (res:any) => {
        console.log('comp', res);
        if(res.token){
          console.log(res);
          this.toastr.success('Login successful');
          this.navigationHelper.navigateTo('/');
        }
      },
      error: (error: any) => {
        console.log('error in comp', error);
        this.toastr.error(
          'Login failed',
        );
      },
    });

  }

}
