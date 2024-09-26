import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <app-input [child]="Name"></app-input>
    <br />
    <app-output
      (child2)="Message = $event"
      (child3)="Message2 = $event"
    ></app-output>
    <br />
    From app component - {{ Message }}
    <br />
    From app component - {{ Message2 }}
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'componentInteractionDemo';
  Name = 'John';
  Message: any;
  Message2: any;
}
