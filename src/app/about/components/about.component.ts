import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [],
})
export class AboutComponent implements OnInit {
  featureName: any = 'About Us';

  constructor(private titleService: Title) {
    this.titleService.setTitle('About Us');
  }

  ngOnInit(): void {}
}
