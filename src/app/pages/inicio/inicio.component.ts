import { Component } from '@angular/core';
import { ImageBannerComponent } from "../../components/image-banner/image-banner.component";
import { InfoCardComponent } from "../../components/info-card/info-card.component";
import { porqueNosotros, actividades, direcciones } from '../data/inicio.data';
import { DynamicIconComponent } from "../../components/icons/dynamic-icon/dynamic-icon.component";
import { CommonModule } from '@angular/common';
import { CarouselComponent, SlideTemplateDirective } from "../../components/carousel/carousel.component";
import { ImageCardComponent } from "../../components/image-card/image-card.component";
import { alianzas } from '../data/alianzas.data';
import { DirectionComponent } from '../../components/direction/direction.component';

@Component({
  selector: 'inicio',
  imports: [DirectionComponent, ImageBannerComponent, InfoCardComponent, DynamicIconComponent, CommonModule, CarouselComponent, SlideTemplateDirective, ImageCardComponent],
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
  activities = actividades;
  alianzas = alianzas;
  direcciones = direcciones;
}
