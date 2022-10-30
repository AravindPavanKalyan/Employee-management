import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const employeesRoutes: Routes = [
  {
    path: '',
    component: ListEmployeesComponent,
    canActivate: [AuthGuard], data: { animation: 'employeesListPage' }
  },
  { path: 'add', component: AddEmployeeComponent },
  { path: ':id', component: EmployeeDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(employeesRoutes)], // registering the child routes
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
