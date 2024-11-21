import { Component } from '@angular/core';

@Component({
  selector: 'lab-footer',
  imports: [],
  template: `
    <footer>
      <P>Por <a [href]="author.url">{{author.name}}</a> / {{version}}</P>
    <p>
    @if (this.cookiesAcepted) {
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
  protected author = {
    name: 'Esteban Arana',
    url: 'https://jeje.com'
  }
  protected version: string = "Angular V19"
  protected cookiesAcepted: boolean = false;

  protected aceptarCookies() {
    this.cookiesAcepted = true;
    console.log('Cookies aceptadas');
  }
}
