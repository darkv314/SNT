import { Component, ElementRef } from '@angular/core';
import { LogoComponent } from "../../../components/logo/logo.component";
import { navLinks } from '../../helpers/nav.helper';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WhatsappComponent } from "../../../components/icons/whatsapp/whatsapp.component";
import { LinkedinComponent } from "../../../components/icons/linkedin/linkedin.component";
import { FacebookComponent } from "../../../components/icons/facebook/facebook.component";
import { SeparatingLineComponent } from "../../../components/separating-line/separating-line.component";

@Component({
  selector: 'footer-bar',
  imports: [RouterLink, RouterLinkActive, LogoComponent, WhatsappComponent, LinkedinComponent, FacebookComponent, SeparatingLineComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  navLinks = navLinks;
  constructor(public elementRef: ElementRef) {}
}
