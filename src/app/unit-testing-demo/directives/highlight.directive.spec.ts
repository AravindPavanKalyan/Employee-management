import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

// 1. create a mock component with appHighlight in its html
@Component({
  template: `
    <div id="myDiv1" appHighlight="yellow">
      Testing Directive with Mock Comp
    </div>
    <div id="myDiv2" appHighlight="skyblue">
      Testing Directive with MOck Comp --- Skyblue Color
    </div>
    <div id="myDiv3" appHighlight>
      Testing Directive with MOck Comp --- lightgrey Color
    </div>
    <div id="myDiv4">
      Testing Directive with MOck Comp --- no bg Color
    </div>
    <input id="input1" value="unit testing input1" appHighlight="navy">
  `
})
class MockComponent {} // No need to export as we will use this component here itself

// 2. test whether the div in the above mock component is getting bg color
describe('HighlightDirective', () => {
  let fixture: ComponentFixture<MockComponent>;
  let highlightEl: DebugElement[];
  let bareDiv: DebugElement;

  //step 2.1 preparing Mockcomponent for testing - loading it into the testing
  beforeEach( () => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        MockComponent,
        HighlightDirective
      ]
    }).createComponent(MockComponent);

    fixture.detectChanges(); // detecting the changes in html of mockcomp

    highlightEl = fixture.debugElement.queryAll(By.directive(HighlightDirective));
    bareDiv = fixture.debugElement.query(By.css('div:not(appHighlight)'));

  })

  //step 2.2 let's test whether div of MockComponent has yellow bg color or not
  it('should have a <div> with bg color yellow', () => {
    const highlightWrapperEl: HTMLElement = fixture.nativeElement.querySelector('#myDiv1');
    console.log(highlightWrapperEl);
    const bgColor = highlightWrapperEl.style.backgroundColor;
    expect(bgColor).toBe('yellow');
  });

  it('should have a <div> with bg color skyblue', () => {
    const highlightWrapperEl: HTMLElement = fixture.nativeElement.querySelector('#myDiv2');
    console.log(highlightWrapperEl);
    const bgColor = highlightWrapperEl.style.backgroundColor;
    expect(bgColor).toBe('skyblue');
  });

  it('should have a <div> with bg color lightgrey', () => {
    const highlightWrapperEl: HTMLElement = fixture.nativeElement.querySelector('#myDiv3');
    console.log(highlightWrapperEl);
    const bgColor = highlightWrapperEl.style.backgroundColor;
    expect(bgColor).toBe('rgb(211, 211, 211)');
  });

  it('should have a <div> with no bg color', () => {
    const divEl: HTMLElement = fixture.nativeElement.querySelector('#myDiv4');
    console.log(divEl);
    const bgColor = divEl.style.backgroundColor;
    expect(bgColor).toBe('');
  });

  // all elements with an attached HighlightDirective
  it('should have four highlighted elements', () => {
    console.log(highlightEl)
    expect(highlightEl.length).toBe(4);
  });

  it('should bind <input> background to value color', () => {
    // easier to work with nativeElement
    const input = highlightEl[3].nativeElement as HTMLInputElement;
    expect(input.style.backgroundColor)
      .withContext('initial backgroundColor')
      .toBe('navy');
  });

  it('bare <div> should not have a bg color', () => {
    expect(bareDiv.properties['customProperty']).toBeUndefined();
  });

});
