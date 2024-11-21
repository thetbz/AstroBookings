import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';

@Component({
  selector: 'lab-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
  <lab-header></lab-header>
    <h1>Welcome to {{title}}!</h1>
<lab-footer></lab-footer>
    <router-outlet />
  `,
  styles: []
})
export class AppComponent {
  protected title = '🚀 Astro Bookings';
}
