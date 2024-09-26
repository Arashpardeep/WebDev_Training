import { Component } from '@angular/core';

@Component({
  selector: 'app-ngifdemo',
  // templateUrl: './ngifdemo.component.html',
  template: `
    <div *ngIf="status; then iblock; else eblock">This is a div.</div>
    <ng-template #iblock>This is the if block</ng-template> <!--This is creating if block and runs if status is true-->
    <ng-template #eblock>This is the else block</ng-template> <!--This is creating else block and runs if status is false-->
  `,
  styleUrls: ['./ngifdemo.component.css'],
})
export class NgifdemoComponent {
  status = false;
}
