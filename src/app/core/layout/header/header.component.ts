import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lab-header',
  imports: [UpperCasePipe],
  template: `
    <header>
      <p>{{title | uppercase}}</p>
    </header>
  `,
  styles: ``
})
export class HeaderComponent {
  protected title = '🚀 Astro Bookings';
}