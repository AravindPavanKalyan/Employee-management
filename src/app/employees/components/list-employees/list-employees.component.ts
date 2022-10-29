import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { IEmployee } from '../../models/iemployee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styles: [],
})
export class ListEmployeesComponent implements OnInit, OnDestroy {
  employees: IEmployee[] = [];
  employeesSubscription!: Subscription;

  constructor(
    private titleService: Title,
    private employeeService: EmployeeService,
    private ngxSpinnerService: NgxSpinnerService
  ) {
    this.titleService.setTitle('Employee Management');
    console.log('Inside Constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // ideal place for REST API calls
    //2.send the req to the service
    this.ngxSpinnerService.show()
    this.employeesSubscription = this.employeeService
      .getEmployees()
      .subscribe((res: IEmployee[]) => {
        // 3.get the res
        // console.log(res);
        this.employees = res;
        this.ngxSpinnerService.hide();
      });
  }

  ngOnDestroy(): void {
    // whenever the comp goes out of the view -- this wll be executed
    // ideal place for you to clear data, clear interval & timeout, unsubscribe
    console.log('Inside Destroy');
    // if(this.employees && this.employees.length > 0) {
    //   this.employees.length = 0;
    // }
    this.employeesSubscription.unsubscribe();
  }
}
