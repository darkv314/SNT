import { Component } from '@angular/core';
import { ImageBannerComponent } from "../../components/image-banner/image-banner.component";
import { ImageInfoComponent } from "../../components/image-info/image-info.component";

@Component({
  selector: 'app-nosotros',
  imports: [ImageBannerComponent, ImageInfoComponent],
  templateUrl: './nosotros.component.html',
})
export class NosotrosComponent {
  banner = {
    imageTitle: 'Banner Nosotros',
    imageUrl: 'assets/banners/nosotros.jpg',
    mainText: 'Nosotros',
  }
  nosotros = {
    imgUrl: 'assets/nosotros/nosotros-descripcion.jpg',
    title: 'Nosotros',
    left: false
  }
  misionVision = {
    imgUrl: 'assets/nosotros/mision-vision.jpg',
    title: 'Misión y Visión',
    left: true
  }
}
