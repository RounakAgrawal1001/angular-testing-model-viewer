import { Component, VERSION } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

// When no stackblitz project, uncomment this line and comment line 56 in polyfills.ts.
// import '@google/model-viewer';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(100%)' })),
      ]),
    ]),
  ],
})
export class AppComponent {
  name = `Angular ${VERSION.major} testing model-viewer`;

  camera_orbit = '45deg 55deg 2.5m';
  src = 'https://modelviewer.dev/shared-assets/models/Astronaut.glb';
  show = false;
  name1: any = 'Hi This is Rounak';
  data: any = [
    {
      name: 'Test',
      age: '16',
    },
    {
      name: 'Test2',
      age: '19',
    },
  ];

  onClick() {
    this.show = !this.show;
  }
}
