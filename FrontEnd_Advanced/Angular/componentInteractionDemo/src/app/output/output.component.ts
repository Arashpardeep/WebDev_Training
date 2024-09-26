import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  // templateUrl: './output.component.html',
  template: `
    <button (click)="Send()">Send Data</button>
    <br />
    <button (click)="Send2()">Send Data 2</button>
  `,
  styleUrls: ['./output.component.css'],
})
export class OutputComponent {
  @Output() child2 = new EventEmitter();
  @Output() child3 = new EventEmitter();

  Send() {
    this.child2.emit('Msg from child2');
  }
  Send2() {
    this.child3.emit('Msg from child3');
  }
}
