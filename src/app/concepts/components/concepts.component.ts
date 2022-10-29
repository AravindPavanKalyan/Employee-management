import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [],
})
export class ConceptsComponent implements OnInit, AfterViewInit {
  // public variable

  //directives
  isLoggedIn = false;

  //*ngFor
  skills: any = ['HTML', 'CSS', 'Js', 'ng', 'NodeJS'];

  //*ngSwitch
  dayOfWeek: any = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  // view child related
  @ViewChild(CebComponent, { static: false }) cebComponent!: CebComponent;

  // view_child related
  viewChildCebComponentData: any;

  //interpolation
  appName = 'Employee Manager App!';
  companyProfile = {
    name: 'Cognizant',
    employeesCount: 341000,
  };

  //pipes
  dummyText =
    'Thanks for joining the session. warm welcome to Learning and Development team';
  today: Date = new Date();

  //Custom Property binding related
  myAge = 32;

  //property binding
  teamSize = 14;

  // custom event binding related
  dataReceivedFromChildComp: any;

  // two way binding related
  courseName = 'angular';

  // eslint-disable-next-line no-unused-vars
  constructor(private cd: ChangeDetectorRef, private titleService: Title) {
    this.titleService.setTitle('Concepts');
  }

  ngOnInit(): void {}

  //view_child related
  ngAfterViewInit() {
    console.log(this.cebComponent.profile);
    this.viewChildCebComponentData = this.cebComponent.profile;
    this.cd.detectChanges();
  }

  // event binding related
  handleClick(element: any) {
    // alert('you just clicked the button')
    console.log();
    element.disabled = true;
    element.innerText = 'clicked';
  }

  //Step 6: event handler of the custom event
  handleProfileLoaded(event: any) {
    // Step 7: we receive the data thru event
    console.log(event);
    this.dataReceivedFromChildComp = event;
  }
}
