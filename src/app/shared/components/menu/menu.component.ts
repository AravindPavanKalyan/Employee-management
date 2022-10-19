import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

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
