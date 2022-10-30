import { TemplateRef, ViewContainerRef } from '@angular/core';
import { DemoIfDirective } from './demo-if.directive';

describe('DemoIfDirective', () => {
  let ViewContainerRef: ViewContainerRef;
  let templateRef: TemplateRef<any>;

  it('should create an instance', () => {
    const directive = new DemoIfDirective(ViewContainerRef, templateRef);
    expect(directive).toBeTruthy();
  });
});
