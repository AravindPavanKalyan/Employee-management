import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-unit-testing-demo',
  templateUrl: './unit-testing-demo.component.html',
  styles: [
    
  ]
})
export class UnitTestingDemoComponent implements OnInit {

  featureName!: string;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Unit Testing');
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.featureName = 'Testing the ngOnInit with fakeAsync and tick';
    }, 2000);
  }

}
