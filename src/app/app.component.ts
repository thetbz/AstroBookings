import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'lab-root',
    imports: [RouterOutlet],
    template: `
    <h1>Welcome to {{title}}!</h1>
    <p>By Estebita</p>

    <router-outlet />
  `,
    styles: []
})
export class AppComponent {
  title = '🚀 Astro Bookings';
}
