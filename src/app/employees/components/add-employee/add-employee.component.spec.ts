import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

import { AddEmployeeComponent } from './add-employee.component';
import { of } from 'rxjs';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;
  let service: EmployeeService;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEmployeeComponent],
      imports: [
        HttpClientModule,
        ToastrModule.forRoot(),
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: ToastrService },
        {
          provide: EmployeeService,
        },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(EmployeeService);
    fixture.detectChanges();
  });

  it('should navigate to /employees', () => {
    component.handleGoBack();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/employees']);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test spec 2
  // positive state of the form
  it('has valid form when all fields are properly filled', () => {
    component.addEmployeeForm?.controls['name'].setValue('john');
    component.addEmployeeForm?.controls['phone'].setValue('12345678');
    component.addEmployeeForm?.controls['email'].setValue('khs@g.com');
    expect(component.addEmployeeForm.valid).toBeTrue();
  });

  //test spec 3
  // negative state of the form
  it('has invalid form when all fields are not properly filled', () => {
    component.addEmployeeForm?.controls['name'].setValue('');
    component.addEmployeeForm?.controls['phone'].setValue('12345');
    component.addEmployeeForm?.controls['email'].setValue('kthdht');
    expect(component.addEmployeeForm.valid).toBeFalse();
  });

  // test spec3
  // find out submit  logic -- spyOn
  it('should call handleAddEmployee -- all through[ts]', () => {
    spyOn(component, 'handleAddEmployee'); // install spy onto an existing object
    component.handleAddEmployee();
    expect(component.handleAddEmployee).toHaveBeenCalled();
  });

  // now lets test the handleAddEmployee method by triggering the click on html button
  it('should call handleAddEmployee when submit btn clicked with all fields properly filled', () => {
    // enter valid input values onbly then , submit btn will be enabled
    component.addEmployeeForm?.controls['name'].setValue('john');
    component.addEmployeeForm?.controls['phone'].setValue('12345678');
    component.addEmployeeForm?.controls['email'].setValue('sdjhga@sjd.com');

    fixture.detectChanges(); // you must detect changes only then submit btn will be enabled
    spyOn(component, 'handleAddEmployee');
    const submitBtn = fixture.debugElement.query(
      By.css('.submitBtn')
    ).nativeElement;
    submitBtn.click();
    expect(component.handleAddEmployee).toHaveBeenCalled();
  });

  //todo1: should have filled the form submission logic tested bt spy
  it('should have filled the form submission logic tested bt spy', (done: DoneFn) => {
    // enter valid input values onbly then , submit btn will be enabled
    component.addEmployeeForm?.controls['name'].setValue('Virat Kohli');
    component.addEmployeeForm?.controls['phone'].setValue('24234234');
    component.addEmployeeForm?.controls['email'].setValue('v@k.com');

    fixture.detectChanges(); // you must detect changes only then submit btn will be enabled
    spyOn(component, 'handleAddEmployee').and.callThrough();
    const submitBtn = fixture.debugElement.query(
      By.css('.submitBtn')
    ).nativeElement;
    submitBtn.click();
    expect(component.handleAddEmployee).toHaveBeenCalled();

    const mockResponse = {
      id: 1,
      name: 'Virat Kohli',
      phone: '24234234',
      email: 'v@k.com',
    };

    spyOn(component.employeeService, 'createEmployee')
      .withArgs(component.addEmployeeForm.value)
      .and.returnValue(of(mockResponse));
    console.log('spec1', component.addEmployeeForm);
    component.employeeService
      .createEmployee(component.addEmployeeForm.value)
      .subscribe({
        next: (res) => {
          expect(res).toEqual(mockResponse);
          done();
        },
        error: () => {
          console.log('SOME ERROR OCCURED.');
          done();
        },
      });
  });

  // todo2: have the form data as null and test form submission logic using spy
  it('should return error when form data is null', () => {
    spyOn(component.employeeService, 'createEmployee')
      .withArgs(component.addEmployeeForm.value)
      .and.throwError('404');
    console.log(
      'component.addEmployeeForm.value',
      component.addEmployeeForm.value
    );

    expect(function () {
      component.employeeService.createEmployee(component.addEmployeeForm.value);
    }).toThrow(new Error('404'));
  });

  it('should call handleAddEmployee when submit btn clicked -- all thru [html]', () => {
    // find the input
    const nameInput: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#nameInput');
    //set value in put
    nameInput.value = 'john';
    // trigger the input event inn all input field
    nameInput.dispatchEvent(new Event('input'));

    const phoneInput: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#phoneInput');
    phoneInput.value = '12345678';
    phoneInput.dispatchEvent(new Event('input'));

    const emailInput: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#emailInput');
    emailInput.value = 'john@hjih.com';
    emailInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    spyOn(component, 'handleAddEmployee');
    const submitBtn = fixture.debugElement.query(
      By.css('.submitBtn')
    ).nativeElement;
    submitBtn.click(); // we can click only if buttons become enabled -- for that we need valid inputs
    expect(component.handleAddEmployee).toHaveBeenCalled();
  });

  it('should not call errors when valid fields -- all thru [html]', () => {
    // find the input
    const nameInput: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#nameInput');
    //set value in put
    nameInput.value = 'john';
    // trigger the input event inn all input field
    nameInput.dispatchEvent(new Event('input'));

    const phoneInput: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#phoneInput');
    phoneInput.value = '12345678';
    phoneInput.dispatchEvent(new Event('input'));

    const emailInput: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#emailInput');
    emailInput.value = 'john@hjih.com';
    emailInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const nameRequiredEl =
      fixture.debugElement.nativeElement.querySelector('#nameRequired');
    expect(nameRequiredEl).toBeFalsy();

    const phoeRequiredEl =
      fixture.debugElement.nativeElement.querySelector('#phoneRequired');
    expect(phoeRequiredEl).toBeFalsy();

    const maxedPhoneEl =
      fixture.debugElement.nativeElement.querySelector('#maxedPhone');
    expect(maxedPhoneEl).toBeFalsy();

    const insufficientPhoneEl =
      fixture.debugElement.nativeElement.querySelector('#insufficientPhoneEl');
    expect(insufficientPhoneEl).toBeFalsy();

    const emailRequiredEl =
      fixture.debugElement.nativeElement.querySelector('#emailRequired');
    expect(emailRequiredEl).toBeFalsy();

    const invalidEmailEl =
      fixture.debugElement.nativeElement.querySelector('#invalidEmail');
    expect(invalidEmailEl).toBeFalsy();
  });

  it('empty name fields req invalid error truthy-- all thru [html]', () => {
    const nameInput: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#nameInput');
    nameInput.value = '';
    nameInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const nameRequiredEl =
      fixture.debugElement.nativeElement.querySelector('#nameReqErrMsg');
    expect(nameRequiredEl.innerText).toBe('Name is required');
    expect(nameRequiredEl).toBeTruthy();
  });

  it('empty, min length, max length -  phone fields req invalid error truthy-- all thru [html]', () => {
    const phoneInput: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#phoneInput');
    phoneInput.value = '';
    phoneInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const phoneRequiredEl =
      fixture.debugElement.nativeElement.querySelector('#phoneReqErrMsg');
    expect(phoneRequiredEl.innerText).toBe('Phone is required');
    expect(phoneRequiredEl).toBeTruthy();

    phoneInput.value = '12345';
    phoneInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const phoneMinErrMsgEl =
      fixture.debugElement.nativeElement.querySelector('#insufficientPhone');
    expect(phoneMinErrMsgEl.innerText).toBe('Min length is 7');
    expect(phoneMinErrMsgEl).toBeTruthy();

    phoneInput.value = '12345123456789';
    phoneInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const phoneMaxErrMsgEl =
      fixture.debugElement.nativeElement.querySelector('#maxedPhone');
    expect(phoneMaxErrMsgEl.innerText).toBe('Max length is 10');
    expect(phoneMaxErrMsgEl).toBeTruthy();
  });

  it('empty, invalid -  email fields req invalid error truthy-- all thru [html]', () => {
    const emailInput: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#emailInput');
    emailInput.value = '';
    emailInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const emailRequiredEl =
      fixture.debugElement.nativeElement.querySelector('#emailReqErrMsg');
    expect(emailRequiredEl.innerText).toBe('Email is required');
    expect(emailRequiredEl).toBeTruthy();

    emailInput.value = 'asdfghj';
    emailInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    const emailInvalidEl =
      fixture.debugElement.nativeElement.querySelector('#invalidEmail');
    expect(emailInvalidEl.innerText).toBe('Email seems to be not valid');
    expect(emailInvalidEl).toBeTruthy();
  });
});
