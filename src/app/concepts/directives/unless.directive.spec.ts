import { TemplateRef, ViewContainerRef } from '@angular/core';
import { UnlessDirective } from './unless.directive';

describe('UnlessDirective', () => {
  let ViewContainerRef: ViewContainerRef;
  let templateRef: TemplateRef<any>;

  it('should create an instance', () => {
    const directive = new UnlessDirective(ViewContainerRef, templateRef);
    expect(directive).toBeTruthy();
  });

});
