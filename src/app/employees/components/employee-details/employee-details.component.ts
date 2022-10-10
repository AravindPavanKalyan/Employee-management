import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [
  ]
})
export class EmployeeDetailsComponent implements OnInit {

  id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id')
    // console.log('this.route.snapshot.paramM', this.route.snapshot.paramMap.get('id')
    
  }

}
