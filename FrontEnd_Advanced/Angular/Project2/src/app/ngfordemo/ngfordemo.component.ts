import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfordemo',
  // templateUrl: './ngfordemo.component.html',
  template: `
    <ul>
      <li
        *ngFor="let i of Names; index as p; even as e"
        [style]="e ? 'background-color: pink' : 'background-color: beige'"
      >
        <!-- Here even and index are predefined keywords -->
        {{ e }}--{{ i }}
      </li>
    </ul>

    <table border="1">
      <thead [style]="'background-color: grey'">
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>Email</td>
          <td>City</td>
        </tr>
      </thead>
      <tbody>
        <tr
          *ngFor="let person of tableobj"
          [style]="
            person.age > 22
              ? 'background-color: aqua'
              : 'background-color: bisque'
          "
        >
          <td>{{ person.name }}</td>
          <td>{{ person.age }}</td>
          <td>{{ person.email }}</td>
          <td>{{ person.city }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./ngfordemo.component.css'],
})
export class NgfordemoComponent {
  Names = ['James', 'Andrew', 'Sam', 'Peter', 'Jacob'];
  tableobj = [
    {
      name: 'Arash',
      age: 21,
      email: 'sap571@gmail.com',
      city: 'Gurgaon',
    },
    {
      name: 'Rohit',
      age: 23,
      email: 'rohit@gmail.com',
      city: 'Jalandhar',
    },
    {
      name: 'Shivangi',
      age: 20,
      email: 'sgi111@gmail.com',
      city: 'Delhi',
    },
    {
      name: 'Isha',
      age: 22,
      email: 'isha232@gmail.com',
      city: 'Patiala',
    },
    {
      name: 'Raj',
      age: 24,
      email: 'raj101@gmail.com',
      city: 'Mumbai',
    },
  ];
}
