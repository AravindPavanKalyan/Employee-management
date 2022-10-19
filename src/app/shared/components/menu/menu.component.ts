import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Url } from 'url';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    .redText{
      color: red;
    }
  `]
})
export class MenuComponent implements OnInit, AfterContentInit{

  menus = [
    {link : '/concepts', menuName : 'Concepts'},
    {link : '/about', menuName : 'About'},
    {link : '/employees', menuName : 'Employee Management App'},
    {link : '/unit-testing', menuName : 'Unit Testing'},
    {link : '/products', menuName : 'Products'}
  ];

  // only footer backToTop is sending an element with elementRef #backToTop
  @ContentChild('backToTop') b2tElement!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    // u will get undefined if such elRef is not sent from parent comp.
    // we will see undefined once because header comp does not send the elRef #backToTop
    console.log('b2tElement', this.b2tElement) // only footer comp send it
    if(this.b2tElement){
      this.b2tElement.nativeElement.style.backgroundColor = '#dedede';
    }
  }

}
