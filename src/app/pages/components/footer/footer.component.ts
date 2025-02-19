import { Component } from '@angular/core';
import { LogoComponent } from "../../../components/logo/logo.component";
import { navLinks } from '../../helpers/nav.helper';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WhatsappComponent } from "../../../components/icons/whatsapp/whatsapp.component";
import { InstagramComponent } from "../../../components/icons/instagram/instagram.component";
import { LinkedinComponent } from "../../../components/icons/linkedin/linkedin.component";
import { FacebookComponent } from "../../../components/icons/facebook/facebook.component";
import { SeparatingLineComponent } from "../../../components/separating-line/separating-line.component";

@Component({
  selector: 'footer-bar',
  imports: [RouterLink, RouterLinkActive, LogoComponent, WhatsappComponent, InstagramComponent, LinkedinComponent, FacebookComponent, SeparatingLineComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
navLinks = navLinks;
}
