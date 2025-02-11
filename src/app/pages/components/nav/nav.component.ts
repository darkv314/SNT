import { Component } from '@angular/core';
import { navLinks } from '../../helpers/nav.helper';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  host: {
    class: 'contents'
  }
})
export class NavComponent {
  navLinks = navLinks;
}
