import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-calc',
  template: `
    <div>
      <h2>My Calculator | Testing the Calc...!</h2>
    </div>
  `,
  styles: []
})
export class CalcComponent implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle('Calc Page')

  }

  ngOnInit(): void {}

  add(a: number, b: number): number{
    return a+b;
  }
}
