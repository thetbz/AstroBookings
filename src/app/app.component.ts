import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { LaunchDto } from './shared/models/launch.dto';

@Component({
  selector: 'lab-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
  <lab-header [title] = "title"></lab-header>
    <h1>Welcome to {{title}}!</h1>
<lab-footer [appName] = "title"></lab-footer>
    <router-outlet />
  `,
  styles: []
})
export class AppComponent {
  title = '🚀 Astro-Bookings 🎶';
  launch: LaunchDto = {
    mission: '1',
    destination: 'Mars',
    pricePerrSeat: 500,
    status: 'upcoming'
  }
}
