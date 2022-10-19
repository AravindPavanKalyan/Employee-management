import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {

  isLoading = true;
  employee: any;
  duplicateEmployee: any;

  constructor(public employeeService: EmployeeService, private route: ActivatedRoute, private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {
    // reading url param
    const empId: string | null = this.route.snapshot.paramMap.get('id');
    this.isLoading = true;

    this.employeeService.getEmployeeById(empId)
      .subscribe((res: any) => {
        console.log(res);
        this.employee = res;
        this.isLoading = false;
      });
  }

  handleEditModalOpen(){
    this.duplicateEmployee = { ...this.employee }; // shallow copy
  }

  handleUpdateEmployee(){ // submission handler
    console.log(this.duplicateEmployee); // submitted data
    //TODO: submit the above data to

    this.employeeService.updateEmployee(this.duplicateEmployee)
      .subscribe( (res:any) => {
        console.log(res);
        if(res && res.id){
          this.employee = res;
          this.toastr.success('updated succesfully');
        }
      });
  }

  handleDeleteEmp() {
    // if(confirm('Are you sure to delete '+name)) {
    //   console.log('Implement delete functionality here');
    this.employeeService.deleteEmployee(this.employee.id)
      .subscribe( (res:any) => {
        this.toastr.success('deleted succesfully');
        this.router.navigateByUrl('/employees');
        console.log('delete method', res);
        
      });

      
  }
  
}
