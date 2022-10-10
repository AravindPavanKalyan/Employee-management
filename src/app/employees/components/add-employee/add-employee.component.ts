import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: [
  ]
})
export class AddEmployeeComponent implements OnInit {

  isSaved = false;

  //step1 : have the form tag equivalent in ts
  addEmployeeForm!: FormGroup;

  constructor( private employeeService: EmployeeService) { // 1. connect with service

  }

  ngOnInit(): void {
    // step1 continues
    this.addEmployeeForm = new FormGroup({
      // step2 : have the input tags eqivalent in ts
      name: new FormControl('', Validators.required), // step5  let's work on validations
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
      // for step3 refer html
    })
  }

  handleAddEmployee(){
    console.log('submitted');
    console.log(this.addEmployeeForm);
    // form data
    console.log(this.addEmployeeForm.value);

    // 2. send the above form data to the service
    this.employeeService.createEmployee(this.addEmployeeForm.value)
      .subscribe( (res:any) => {
        console.log(res);
        if(res &&res.id){
          this.isSaved = true;
        }
      });
    // 3. get the res from service
    
  }

}
