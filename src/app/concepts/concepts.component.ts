import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  appName = 'Employee Manager App!';
  companyProfile = {
    Name : 'Cognizant',
    Employees : 341000
  };

  constructor() { }

  ngOnInit(): void {
  }

}
