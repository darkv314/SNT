import { Component } from '@angular/core';
import { ImageBannerComponent } from "../../components/image-banner/image-banner.component";

@Component({
  selector: 'inicio',
  imports: [ImageBannerComponent],
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
}
