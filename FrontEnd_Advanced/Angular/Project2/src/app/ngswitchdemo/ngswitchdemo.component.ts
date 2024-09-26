import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitchdemo',
  // templateUrl: './ngswitchdemo.component.html',
  template: `
    <ng-container [ngSwitch]="color">
      <ng-container *ngSwitchCase="r">Roses</ng-container>
      <!--If we are passing variable like here we are passing r in *ngSwitchCase, we do not have to enclose it again in single quotes inside double quotes -->
      <ng-container *ngSwitchCase="'Yellow'">Daffodils</ng-container>
      <!--If we are passing values like here we are passing 'yellow' in *ngSwitchCase, we have to enclose it again in single quotes inside double quotes -->
      <ng-container *ngSwitchCase="'White'">Jasmine</ng-container>
      <ng-container *ngSwitchDefault>No Flowers</ng-container>
    </ng-container>
  `,
  styleUrls: ['./ngswitchdemo.component.css'],
})
export class NgswitchdemoComponent {
  color = 'red';
  r = 'red';
}
