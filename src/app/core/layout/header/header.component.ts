import { UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'lab-header',
  imports: [UpperCasePipe],
  template: `
    <header>
      <p>{{title() | uppercase}}</p>
    </header>
  `,
  styles: ``
})
export class HeaderComponent {
  public readonly title = input.required<string>();
}