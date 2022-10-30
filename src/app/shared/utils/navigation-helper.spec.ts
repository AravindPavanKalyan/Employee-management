import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationHelper } from './navigation-helper';

// describe('NavigationHelper', () => {
//   let router: Router;

//   it('should create an instance', () => {
//     expect(new NavigationHelper(router)).toBeTruthy();
//   });
// });

describe('NavigationHelper', () => {
  let navigationHelper: NavigationHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ]
    });
    navigationHelper = TestBed.inject(NavigationHelper)
  });

  it('should be created', () => {
    expect(navigationHelper).toBeTruthy();
  });

  // testing navigateTo method
  it('should navigate to the corresponding url given', () => {
    spyOn( navigationHelper, 'navigateTo');
    navigationHelper.navigateTo('/about'); // navigates to home page
    expect(navigationHelper.navigateTo).toHaveBeenCalledWith('/about');
  });

});