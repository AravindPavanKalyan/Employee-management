import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IAuthentication } from '../../models/iauthentication';
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
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // step1 continues
    this.signupForm = new FormGroup({
      // step2 : have the input tags eqivalent in ts
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(6),
      ]), // step5  let's work on validations
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(6),
      ]),
      // for step3 refer html
    });
  }

  handleSignup() {
    // 2. send the above form data to the service
    console.log('sent in auth comp', this.signupForm.value);
    this.authService.signupUser(this.signupForm.value).subscribe({
      next: (res: IAuthentication) => {
        console.log('res in comp', res);
        if (res.id) {
          this.toastr.success('signup succesfull');
        }
      },
      error: (error: any) => {
        console.log('error', error);
        this.toastr.error(
          'Http failure response for https://reqres.in/api/register: 400 OK',
          'Error'
        );
      },
    });
    this.signupForm.reset();
  }
}
