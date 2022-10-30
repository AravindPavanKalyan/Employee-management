import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let wrapper: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    wrapper = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment counterValue correctly', () => {
    component.counterValue = 9;
    expect(component.counterValue).toEqual(9);
    component.handleIncrement();
    expect(component.counterValue).toEqual(10);
    component.handleIncrement();
    expect(component.counterValue).toEqual(10);
  });

  it('should decrement counterValue correctly', () => {
    component.counterValue = 1;
    expect(component.counterValue).toEqual(1);
    component.handleDecrement();
    expect(component.counterValue).toEqual(0);
    component.handleDecrement();
    component.handleDecrement();
    expect(component.counterValue).toEqual(0);
  });

  it('should increment counter and update in html when increment btn clicked', () => {
    //find the button from template and trigger/emit the click event
    fixture.debugElement
      .query(By.css('.incrementBtn'))
      .triggerEventHandler('click', null);
    expect(component.counterValue).toEqual(1);
    fixture.detectChanges(); // detect the changes in html
    // along with it, let's check wether it is updated in html
    //const
    const counterHtmlText = fixture.debugElement.query(By.css('p.counterText'))
      .nativeElement.innerText;
    expect(counterHtmlText).toBe('Counter: 1');
  });

  it('should decrement counter and update in html when decrement btn clicked', () => {
    //find the button from template and trigger/emit the click event
    fixture.debugElement
      .query(By.css('.decrementBtn'))
      .triggerEventHandler('click', null);
    expect(component.counterValue).toEqual(0);
    fixture.detectChanges(); // detect the changes in html
    // along with it, let's check wether it is updated in html
    //const
    const counterHtmlText = fixture.debugElement.query(By.css('p.counterText'))
      .nativeElement.innerText;
    expect(counterHtmlText).toBe('Counter: 0');
  });

  it('should stop at 10 and show Maximum counter value reached upon increment', () => {
    component.counterValue = 10;
    fixture.debugElement
      .query(By.css('.incrementBtn'))
      .triggerEventHandler('click', null);
    expect(component.counterValue).toEqual(10);
    fixture.detectChanges();
    const counterMessage = fixture.nativeElement as HTMLElement;
    expect(counterMessage.querySelector('p.counterMessage')?.textContent).toBe(
      'Maximum counter value reached'
    );
  });

  it('should stop at 0 and show mimimum counter value reached upon decrement', () => {
    component.counterValue = 0;
    fixture.debugElement
      .query(By.css('.decrementBtn'))
      .triggerEventHandler('click', null);
    expect(component.counterValue).toEqual(0);
    fixture.detectChanges();
    // const counterMessage = fixture.nativeElement as HTMLElement;
    // expect(counterMessage.querySelector('p.counterMessage')?.textContent).toBe('Minimum counter value reached');
    const counterMessage = fixture.debugElement.query(
      By.css('p.counterMessage')
    ).nativeElement.innerText;
    expect(counterMessage).toBe('Minimum counter value reached');
  });

  //Increment and decrement button names
  it('should match button labels tp "Decrement" and "Increment"', () => {
    const counterComponentHTML = fixture.nativeElement as HTMLElement;
    expect(
      counterComponentHTML.querySelector('button.incrementBtn')?.textContent
    ).toBe(' Increment ');
    expect(
      counterComponentHTML.querySelector('button.decrementBtn')?.textContent
    ).toBe(' Decrement ');
  });

  // testing inline styles of html
  it('should have red bg color in h2 element', () => {
    const bgColor = wrapper.querySelector('h2')?.style.backgroundColor;
    expect(bgColor).toBe('rgb(255, 0, 0)'); //not recommended to use the exact color name like 'red', 'blue'
  });

  //testing whether the button elements have button class 'btn'
  it('should have button class "btn" to the button elements', () => {
    const btnHTML = wrapper.querySelector('.incrementBtn');
    expect(btnHTML).toHaveClass('btn');
  });

  it('ngOnInit', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });
});
