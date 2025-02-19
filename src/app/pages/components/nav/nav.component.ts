import { Component } from '@angular/core';
import { navLinks } from '../../helpers/nav.helper';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SeparatingLineComponent } from "../../../components/separating-line/separating-line.component";

@Component({
  selector: 'nav-bar',
  imports: [RouterLink, RouterLinkActive, SeparatingLineComponent],
  templateUrl: './nav.component.html',
  host: {
    class: 'contents'
  }
})
export class NavComponent {
  navLinks = navLinks;
}
