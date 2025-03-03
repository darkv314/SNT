import { Component } from '@angular/core';
import { ImageBannerComponent } from "../../components/image-banner/image-banner.component";
import { InfiniteCarouselComponent } from "../../components/infinite-carousel/infinite-carousel.component";
import { alianzas } from '../data/alianzas.data';

@Component({
  selector: 'app-alianzas',
  imports: [ImageBannerComponent, InfiniteCarouselComponent],
  templateUrl: './alianzas.component.html',
})
export class AlianzasComponent {
  banner = {
    imageTitle: 'Banner Alianzas',
    imageUrl: 'assets/banners/alianzas.jpg',
    mainText: 'Alianzas',
  }
  alianzas = alianzas;
}
