import { Component, output } from '@angular/core';
import { navLinks } from '../../helpers/nav.helper';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SeparatingLineComponent } from "../../../components/separating-line/separating-line.component";
import { LogoComponent } from "../../../components/logo/logo.component";
import { MenuComponent } from "../../../components/icons/menu/menu.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";

@Component({
  selector: 'nav-bar',
  imports: [RouterLink, RouterLinkActive, SeparatingLineComponent, LogoComponent, MenuComponent, NavMenuComponent],
  templateUrl: './nav.component.html',
  host: {
    class: 'contents'
  }
})
export class NavComponent {
  navLinks = navLinks;
  navMenu = false;
  scrollToFooter = output<void>();

  toggleMenu() {
    this.navMenu = !this.navMenu;
  }
}
