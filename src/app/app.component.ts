import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ChildrenOutletContexts, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit{
  title = 'employee-mgmt-ng-oct2022';

  constructor( private contexts: ChildrenOutletContexts, private router: Router, private titleService: Title, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // navigation event gets triggered when navigation ends successfully
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        var rt = this.getChild(this.activatedRoute);
        rt.data.subscribe((data: any) => { // subscribing the data from getChild method
          console.log(data);
          this.titleService.setTitle(data.title); // setting the title using inbuilld titleService
        });
      });
  }

  // setTitle related
  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
