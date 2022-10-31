import { Component, NgZone, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animateChild,
  query,
  group,
} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [`
  :host {
    display: block;
    margin-top: 1rem;
  }
  
  .open-close-container {
    border: 1px solid #dddddd;
    margin-top: 1em;
    padding: 20px 20px 0px 20px;
    color: #000000;
    font-weight: bold;
    font-size: 20px;
  }
  `],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  featureName: any = 'About Us';
  isOpen = true;
  progress: number = 0;
  label!: string;

  constructor(private _ngZone: NgZone) {
  }

  ngOnInit(): void {}

  // Loop inside the Angular zone
  // so the UI DOES refresh after each setTimeout cycle
  processWithinAngularZone() {
    this.label = 'inside';
    this.progress = 0;
    this._increaseProgress(() => console.log('Inside Done!'));
  }

  // Loop outside of the Angular zone
  // so the UI DOES NOT refresh after each setTimeout cycle
  processOutsideOfAngularZone() {
    this.label = 'outside';
    this.progress = 0;
    this._ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        // reenter the Angular zone and display done
        this._ngZone.run(() => { console.log('Outside Done!'); });
      });
    });
  }

  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Current progress: ${this.progress}%`);

    if (this.progress < 100) {
      window.setTimeout(() => this._increaseProgress(doneCallback), 10);
    } else {
      doneCallback();
    }
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
