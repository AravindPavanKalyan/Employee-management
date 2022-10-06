import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment counterValue correctly', () => {
    expect(component.counterValue).toEqual(0);
    component.handleIncrement();
    expect(component.counterValue).toEqual(1);
    component.handleIncrement();
    expect(component.counterValue).toEqual(2);
  });

  it('should decrement counterValue correctly', () => {
    expect(component.counterValue).toEqual(0);
    component.handleDecrement();
    expect(component.counterValue).toEqual(-1);
    component.handleDecrement();
    component.handleDecrement();
    expect(component.counterValue).toEqual(-3);
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

  it('should increment counter and update in html when decrement btn clicked', () => {
    //find the button from template and trigger/emit the click event
    fixture.debugElement
      .query(By.css('.decrementBtn'))
      .triggerEventHandler('click', null);
    expect(component.counterValue).toEqual(-1);
    fixture.detectChanges(); // detect the changes in html
    // along with it, let's check wether it is updated in html
    //const
    const counterHtmlText = fixture.debugElement.query(By.css('p.counterText'))
      .nativeElement.innerText;
    expect(counterHtmlText).toBe('Counter: -1');
  });
});
