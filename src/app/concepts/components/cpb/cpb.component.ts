import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  template: `
    <div style="border-color: green; border-width: 1px; border-style: solid; margin-bottom: 2px">
      Parent to child component communication
      <p>My Age : {{ age }}</p>
    </div>
  `,
  styles: [],
})
export class CpbComponent implements OnInit {
  // Step 1: Let's have a variable
  @Input() age = 26; // Step 2: Let's make the variable as custom property by @Input()
  // Refer. concepts.comp.html  for step 3

  constructor() {}

  ngOnInit(): void {}
}
