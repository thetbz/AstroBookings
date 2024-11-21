import { Component, input, signal, WritableSignal } from '@angular/core';
import { Author } from './author.type';

@Component({
  selector: 'lab-footer',
  imports: [],
  template: `
    <footer>
      <P>{{appName()}} Por <a [href]="author.url">{{author.name}}</a> / {{version}}</P>
    <p>
    @if (this.cookiesAcepted()) {
      <span>🍪 Cookies aceptadas</span>
    }@else{
      <button (click)="aceptarCookies()">Aceptar cookies</button>
    }
    </p>
  </footer>
  `,
  styles: ``
})
export class FooterComponent {
  public appName = input<string>('');
  protected author: Author = {
    name: 'Esteban Arana',
    url: 'https://jeje.com'
  }
  protected version: string = "Angular V19"
  protected cookiesAcepted: WritableSignal<boolean> = signal<boolean>(false);

  protected aceptarCookies() {
    this.cookiesAcepted.set(true);
    console.log('Cookies aceptadas');
  }
}
