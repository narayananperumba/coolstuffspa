import { Component } from '@angular/core';
import { HomeComponent }   from './components/home/home.component';

@Component({
  selector: 'my-app',
  template: `
  <div class="container-fluid page-container">
  <header> </header>
  <home-data></home-data>
  </div>`
})
export class AppComponent {}
