import { Component } from '@angular/core';

@Component({
  selector: 'lab-footer',
  imports: [],
  template: `
    <footer>
      <P>Por {{author}} / {{version}}</P>
    </footer>
  `,
  styles: ``
})
export class FooterComponent {
  protected author: string = "Esteban Arana"
  protected version: string = "Angular V19"
}
