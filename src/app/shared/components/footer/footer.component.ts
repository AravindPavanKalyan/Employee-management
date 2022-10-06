import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
   <footer class="text-center">
      <hr>
      <app-menu>
        <li class="nav-item " backToBottom>
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-menu>
      <p>Copyright 2022 | Kalyan</p>
    </footer>s
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
