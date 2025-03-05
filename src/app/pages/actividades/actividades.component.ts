import { Component } from '@angular/core';
import { ImageBannerComponent } from "../../components/image-banner/image-banner.component";
import { CarouselComponent, SlideTemplateDirective } from "../../components/carousel/carousel.component";
import { ImageCardComponent } from "../../components/image-card/image-card.component";
import { actividades } from '../data/actividades.data';

@Component({
  selector: 'app-actividades',
  imports: [ImageBannerComponent, CarouselComponent, ImageCardComponent, SlideTemplateDirective],
  templateUrl: './actividades.component.html',
})
export class ActividadesComponent {
  banner = {
    imageTitle: 'Banner Actividades',
    imageUrl: 'assets/banners/actividades.jpg',
    mainText: 'Actividades',
  }
  activities = actividades;
}
