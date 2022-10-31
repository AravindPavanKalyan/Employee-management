import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';

import { ListEmployeesComponent } from './list-employees.component';

describe('ListEmployeesComponent', () => {
  let component: ListEmployeesComponent;
  let fixture: ComponentFixture<ListEmployeesComponent>;
  let employeeService: EmployeeService;

  //steps for mocking
  //1. have the mock data of array with mn 2 objects
  //2. prepare for mocking a service's API method
  //  2.1 what service to mock? EmployeeService
  //  2.2 what API method to mock? getEmployee()
  //3. provide the mock data for the service request

  const mockEmployeeList = [
    {
      id: 1,
      name: 'Virat Kohli',
      email: 'v@k.com',
      phone: '1-770-736-803',
    },
    {
      id: 2,
      name: 'Steve Smith',
      email: 's@s.com',
      phone: '010-692-6599',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListEmployeesComponent],
      imports: [HttpClientModule],
      providers: [
        {
          provide: EmployeeService,
          useValue: {
            getEmployees: () => of(mockEmployeeList),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeesComponent);
    component = fixture.componentInstance;
    // imp as we dep inj this service in our comp
    employeeService = TestBed.inject(EmployeeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Challenges/Disadvantages of Testing Direct API Request
  //     1.Time consuming
  //     2.Backend REST API might have data inconsistencies
  //     3.Backend might not be stable/ may still be in development

  it('shoulld have array with length 2 in employees', () => {
    console.log(component.employees.length);
    expect(component.employees.length).toEqual(2);
  });

  it('shoulld render employee named "Virat Kohli"', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h5').innerText).toBe(
      'Virat Kohli'
    );
  });

  it('should have employees from service -- [MOCKING API]', () => {
    expect(component.employees).toEqual(mockEmployeeList);
  });
});
