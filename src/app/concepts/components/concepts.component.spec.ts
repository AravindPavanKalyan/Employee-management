import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CebComponent } from './ceb/ceb.component';
import { CpbComponent } from './cpb/cpb.component';

import { ConceptsComponent } from './concepts.component';
import { ColorizerDirective } from '../directives/colorizer.directive';
import { DemoIfDirective } from '../directives/demo-if.directive';
import { UnlessDirective } from '../directives/unless.directive';
import { EllipsisPipe } from 'src/app/shared/pipes/ellipsis.pipe';

describe('ConceptsComponent', () => {
  let component: ConceptsComponent;
  let fixture: ComponentFixture<ConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ConceptsComponent,
        CebComponent, 
        CpbComponent, 
        ColorizerDirective, 
        UnlessDirective,
        DemoIfDirective,
        EllipsisPipe
      ],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptsComponent);
    component = fixture.componentInstance;
    component.child = TestBed.createComponent(CebComponent).componentInstance as CebComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a <div> with background color red, colour rgb(255, 255, 255), height 100px and padding 20px', () => {
    const divElement: HTMLElement = fixture.nativeElement.querySelector('[data-testid="colorizerEls"]');
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
    const divElement: HTMLElement = fixture.nativeElement.querySelector('[data-testid="colorizerEls"]');
    const pEl = divElement.querySelector('p');
    console.log('prop p', pEl);
    expect(pEl).toBeTruthy();
  });

  it('should have <p> with textContent-Powered By Colorizer Directive', () => {
    const divElement: HTMLElement = fixture.nativeElement.querySelector('[data-testid="colorizerEls"]');
    const pEl = divElement.querySelector('p');
    const pElTextContent = pEl?.textContent;
    // console.log('qwerty', pEl);
    // console.log('only text', pElTextContent);
    // const pElTextContent = divElement.childNodes[0].textContent;
    // console.log('req div', divElement.childNodes);
    expect(pElTextContent).toBe('Powered By Colorizer Directive');
  });

  it('should have <p> with float-right, fontSize-10px', () => {
    const divElement: HTMLElement = fixture.nativeElement.querySelector('[data-testid="colorizerEls"]');
    // console.log('divElement', divElement.querySelector('p'));
    const pEl = divElement.querySelector('p');
    // console.log('pEl?.style', pEl?.style);
    const pElFloat = pEl?.style.float;
    expect(pElFloat).toBe('right');
    const pElFontSize = pEl?.style.fontSize;
    expect(pElFontSize).toBe('10px');
  });


});
