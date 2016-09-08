import { Component } from '@angular/core';
@Component({
  selector: 'header',
  template: `<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">
        {{title | uppercase}}
      </a>
    </div>
  </div>
</nav>`
})
export class HeaderComponent {
	title = "Topplistan";
}
