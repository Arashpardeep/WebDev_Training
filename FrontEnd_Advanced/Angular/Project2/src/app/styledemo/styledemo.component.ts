import { Component } from '@angular/core';

@Component({
  selector: 'app-styledemo',
  // templateUrl: './styledemo.component.html',
  template: `
    <p [style]="s1" [ngStyle]="s2" [ngClass]="{ class1: active }">
      This is a para in style component
    </p>
  `,
  styleUrls: ['./styledemo.component.css'],
})
export class StyledemoComponent {
  s2 = { color: 'red', border: '2px solid red', backgroundColor: 'beige' };
  // ngStyle takes preference over style
  s1 = 'background-color: pink';
  active = true;
}
