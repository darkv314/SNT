import { Component, output } from '@angular/core';
import { LogoComponent } from "../../../../components/logo/logo.component";
import { navLinks } from '../../../helpers/nav.helper';
import { RouterLink } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'nav-menu',
  imports: [LogoComponent, RouterLink],
  templateUrl: './nav-menu.component.html',
  host: {
    class: 'contents'
  },
  animations: [
    trigger('slideIn', [
      state('out', style({
        transform: 'translateX(100%)',
        opacity: 1
      })),
      transition(':enter', [style({
        transform: 'translateX(100%)',
        opacity: 1
      }), animate('300ms ease-in-out')]),
      transition('* => out', animate('300ms ease-in-out')),
    ])
  ]
})
export class NavMenuComponent {
  isClosed = false;
  navLinks = navLinks;
  closeMenu = output<boolean>();

  onAnimationDone(event: any) {
    if (event.toState === 'out') {
      this.close();
    }
  }

  close() {
    this.closeMenu.emit(false);
  }
}
