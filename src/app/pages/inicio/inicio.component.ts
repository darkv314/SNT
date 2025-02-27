import { Component } from '@angular/core';
import { ImageBannerComponent } from "../../components/image-banner/image-banner.component";
import { FacebookComponent } from "../../components/icons/facebook/facebook.component";
import { InfoCardComponent } from "../../components/info-card/info-card.component";
import { porqueNosotros } from '../data/inicio.data';
import { DynamicIconComponent } from "../../components/icons/dynamic-icon/dynamic-icon.component";
import { CommonModule } from '@angular/common';
import { CarouselComponent, SlideTemplateDirective } from "../../components/carousel/carousel.component";

@Component({
  selector: 'inicio',
  imports: [ImageBannerComponent, InfoCardComponent, DynamicIconComponent, CommonModule, CarouselComponent, SlideTemplateDirective],
  templateUrl: './inicio.component.html',
})
export class InicioComponent {
  banner = {
    imageTitle: 'Banner Inicio',
    imageUrl: 'assets/banners/inicio.jpg',
    initialText: 'Diseñamos tus ideas ',
    mainText: 'construimos ',
    lastText: 'tu futuro'
  }
  cards = porqueNosotros;
}
