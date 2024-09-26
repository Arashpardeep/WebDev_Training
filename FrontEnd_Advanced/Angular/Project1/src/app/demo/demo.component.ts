import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  // templateUrl: './demo.component.html',

  template: `
    <h1>This is from inline template</h1>
    {{ firstname }}
    <p [style]="counter % 2 == 0 ? s1 : s2">This is a para</p>
    <p [style]="age > 18 ? s1 : s2">
      This is a para. I am {{ age > 20 ? 'Eligible' : 'Not Eligible' }}
    </p>
    <p>{{ status }}</p>
    {{ counter }}
    <button id="btn1" (click)="increase()">Increment</button>
    <br />
    <br>
    <button id="btn2" (click)="toggle()">{{ btn }}</button>
    <img [src]="curr" alt="temp" [style]="img" />
  `,
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent {
  firstname: string = 'John';
  counter = 0;
  age: number = 19;

  status: boolean = true;

  s1 = 'background-color: orange';
  s2 = 'background-color: green';

  img = 'width: 400px';

  increase() {
    this.counter = this.counter + 1;
  }

  src1 = '../../assets/images/img1.jpg';
  src2 = '../../assets/images/img2.jpg';
  curr = this.src1;

  btntxt1 = 'Next';
  btntxt2 = 'Prev';
  btn = this.btntxt1;

  toggle() {
    if (this.curr == this.src1) {
      this.curr = this.src2;
      this.btn = this.btntxt2;
    } else {
      this.curr = this.src1;
      this.btn = this.btntxt1;
    }
  }
}
