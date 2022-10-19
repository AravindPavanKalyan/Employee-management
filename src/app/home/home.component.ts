import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title) { 
    titleService.setTitle('Employee Management Home');
  }

  ngOnInit(): void {
  }

}
