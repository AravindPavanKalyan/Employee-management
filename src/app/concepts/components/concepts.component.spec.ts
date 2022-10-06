import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CebComponent } from './ceb/ceb.component';
import { CpbComponent } from './cpb/cpb.component';

import { ConceptsComponent } from './concepts.component';
import { ColorizerDirective } from '../directives/colorizer.directive';
import { DemoIfDirective } from '../directives/demo-if.directive';
import { UnlessDirective } from '../directives/unless.directive';

describe('ConceptsComponent', () => {
  let component: ConceptsComponent;
  let fixture: ComponentFixture<ConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptsComponent, CebComponent, CpbComponent, ColorizerDirective, UnlessDirective, DemoIfDirective ],
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
  
});
