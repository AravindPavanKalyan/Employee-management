import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styles: [
  ]
})
export class ListEmployeesComponent implements OnInit {

  constructor() { }

  employees = [{id:1, empName:'John Doe'}]


  ngOnInit(): void {
  }

}
