import { Component } from '@angular/core';
import { navLinks } from '../../helpers/nav.helper';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SeparatingLineComponent } from "../../../components/separating-line/separating-line.component";
import { LogoComponent } from "../../../components/logo/logo.component";

@Component({
  selector: 'nav-bar',
  imports: [RouterLink, RouterLinkActive, SeparatingLineComponent, LogoComponent],
  templateUrl: './nav.component.html',
  host: {
    class: 'contents'
  }
})
export class NavComponent {
  navLinks = navLinks;
}
