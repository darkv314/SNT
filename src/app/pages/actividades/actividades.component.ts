import { Component } from '@angular/core';
import { ImageBannerComponent } from "../../components/image-banner/image-banner.component";

@Component({
  selector: 'app-actividades',
  imports: [ImageBannerComponent],
  templateUrl: './actividades.component.html',
})
export class ActividadesComponent {
  banner = {
    imageTitle: 'Banner Actividades',
    imageUrl: 'assets/banners/actividades.jpg',
    mainText: 'Actividades',
  }
}
