import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NavigationHelper } from 'src/app/shared/utils/navigation-helper';
import { PasswordStrengthValidator } from 'src/app/shared/utils/password-strength-validator';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  //step1 : have the form tag equivalent in ts
  signupForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    public navigationHelper: NavigationHelper
  ) {}

  ngOnInit(): void {
    // step1 continues
    this.signupForm = new FormGroup({
      // step2 : have the input tags eqivalent in ts
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(6),
        PasswordStrengthValidator()
      ]), // step5  let's work on validations
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(6),
        PasswordStrengthValidator()
      ]),
      // for step3 refer html
    });
  }

  handleSignup() {
    // 2. send the above form data to the service
    console.log('sent in auth comp', this.signupForm.value);
    this.authService.signupUser(this.signupForm.value).subscribe({
      next: (res: any) => {
        console.log('res in comp', res);
        if (res.id && res.token) {
          this.toastr.success('Signup successful');
          this.signupForm.reset();
          this.navigationHelper.navigateTo('/auth/login');
        }
      },
      error: (error: any) => {
        console.log('error', error);
        this.toastr.error('Signup unsuccessful', 'Error');
      },
    });
  }
}
