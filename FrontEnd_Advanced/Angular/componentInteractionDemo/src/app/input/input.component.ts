import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  // templateUrl: './input.component.html',
  template: ` Child = {{ child }} `,
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() child: any;
}
