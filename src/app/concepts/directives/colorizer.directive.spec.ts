import { Component} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorizerDirective } from './colorizer.directive';

@Component({
  template: `
  <div appColorizer>
    colorizer directive testing
</div>
  `
})
class MockComponent {} // No need to export as we will use this component her itself

describe('ColorizerDirective', () => {
  let fixture: ComponentFixture<MockComponent>;

  //step 2.1 preparing Mockcomponent for testing - loading it into the testing
  beforeEach( () => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        MockComponent,
        ColorizerDirective
      ]
    }).createComponent(MockComponent);

    fixture.detectChanges(); // detecting the changes in html of mockcomp
    
  });

  it('should have a <div> with background color red, colour rgb(255, 255, 255), height 100px and padding 20px', () => {
    const divElement: HTMLElement = fixture.nativeElement.querySelector('div');
    // console.log(divElement);
    const divElementBgColor = divElement.style.backgroundColor;
    expect(divElementBgColor).toBe('red');
    const divElementColor = divElement.style.color;
    expect(divElementColor).toBe('rgb(255, 255, 255)');
    const divElementHeight = divElement.style.height;
    expect(divElementHeight).toBe('100px');
    const divElementPadding = divElement.style.padding;
    expect(divElementPadding).toBe('20px');
  });

  it('should have a <p> inside <div>', () => {
    const divElement: HTMLElement = fixture.nativeElement.querySelector('div');
    console.log(divElement);
    const pEl = divElement.querySelector('p');
    expect(pEl).toBeTruthy();
  });

  it('should have <p> with float-right, fontSize-10px, textContent-Powered By Colorizer Directive', () => {
    const pEl: HTMLElement = fixture.nativeElement.querySelector('p');
    // console.log('pEl', pEl);
    const pElFloat = pEl.style.float;
    expect(pElFloat).toBe('right');
    const pElFontSize = pEl.style.fontSize;
    expect(pElFontSize).toBe('10px');
    const pElTextContent = pEl.textContent;
    expect(pElTextContent).toBe('Powered By Colorizer Directive');
  });

});
