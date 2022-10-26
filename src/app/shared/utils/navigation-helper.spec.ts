import { Router } from '@angular/router';
import { NavigationHelper } from './navigation-helper';

describe('NavigationHelper', () => {
  let router: Router

  it('should create an instance', () => {
    expect(new NavigationHelper(router)).toBeTruthy();
  });
});
