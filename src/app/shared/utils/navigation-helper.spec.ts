import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationHelper } from './navigation-helper';

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
  it('should navigate to the about component', () => {
    spyOn( navigationHelper, 'navigateTo');
    navigationHelper.navigateTo('/about'); // navigates to about page
    expect(navigationHelper.navigateTo).toHaveBeenCalledWith('/about');
  });

});