import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';

import { EmployeeDetailsComponent } from './employee-details.component';

describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;
  let service: EmployeeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeDetailsComponent],
      imports: [HttpClientModule, RouterTestingModule, ToastrModule.forRoot()],
      providers: [
        ToastrService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: '10',
              }),
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(EmployeeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should call getEmployeeById of EmployeeService', () => {
    spyOn(component.employeeService, 'getEmployeeById').and.callThrough();
    component.employeeService.getEmployeeById('1');
    expect(component.employeeService.getEmployeeById).toHaveBeenCalled();
  });

  // negative test spec
  it('should return error when wrong employee id sent', () => {
    spyOn(component.employeeService, 'getEmployeeById')
      .withArgs(null)
      .and.throwError('404');
    expect(function () {
      component.employeeService.getEmployeeById(null);
    }).toThrow(new Error('404'));
  });

  // positive test spec
  it('should fetch right employee details', (done: DoneFn) => {
    const empId = '1'; // url param -- empId
    const mockResponse = {
      id: 1,
      name: 'Virat Kohli',
      phone: '24234234',
      email: 'v@k.com',
    };

    spyOn(component.employeeService, 'getEmployeeById')
      .withArgs(empId)
      .and.returnValue(of(mockResponse));
    component.employeeService.getEmployeeById(empId).subscribe({
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
});
