import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

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
        HighlightDirective,
      ],
    }).compileComponents();
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
    const highlightWrapperEl: HTMLElement = fixture.nativeElement.querySelector(
      '[data-testid="highlightWrapper"]'
    );
    console.log(highlightWrapperEl);
    const bgColor = highlightWrapperEl.style.backgroundColor;
    expect(bgColor).toBe('skyblue');
  });

  // approach #1 using timeout
  it('has featureName as "Listing Employess" [approach #1]', fakeAsync(() => {
    component.ngOnInit();
    tick(2001);
    expect(component.featureName).toEqual(
      'Testing the ngOnInit with fakeAsync and tick'
    );
  }));

  // approach #2 using timeout
  it('has featureName with proper text [approach #2]', (done) => {
    component.ngOnInit();
    setTimeout(() => {
      expect(component.featureName).toEqual(
        'Testing the ngOnInit with fakeAsync and tick'
      );
      done();
    }, 2001);
  });
});
