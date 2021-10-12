import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div>
    <h1> Acme Product Management</h1>
    <pm-products></pm-products>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Angular: Getting Started';
}
