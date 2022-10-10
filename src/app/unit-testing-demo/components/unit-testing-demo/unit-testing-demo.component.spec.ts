import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestingDemoComponent } from './unit-testing-demo.component';
import { CounterComponent } from '../counter/counter.component';
import { HighlightDirective } from '../../directives/highlight.directive';

describe('UnitTestingDemoComponent', () => {
  let component: UnitTestingDemoComponent;
  let fixture: ComponentFixture<UnitTestingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UnitTestingDemoComponent,
        CounterComponent,
        HighlightDirective
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have skyblue <div>', () => {
  //   const highlightWrapper = fixture.nativeElement.querySelector('[data-testid="highlightWrapper"]');
  //   const bgColor = highlightWrapper.style.backgroundColor;
  //   expect(bgColor).toBe('skyblue')
  // });

  it('should have skyblue <div>', () => {
    const highlightWrapperEl: HTMLElement = fixture.nativeElement.querySelector('[data-testid="highlightWrapper"]');
    console.log(highlightWrapperEl);
    const bgColor = highlightWrapperEl.style.backgroundColor;
    expect(bgColor).toBe('skyblue');
  });
});
