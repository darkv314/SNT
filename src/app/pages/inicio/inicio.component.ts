import { Component } from '@angular/core';
import { ImageBannerComponent } from "../../components/image-banner/image-banner.component";
import { SeparatingLineComponent } from "../../components/separating-line/separating-line.component";

@Component({
  selector: 'inicio',
  imports: [ImageBannerComponent, SeparatingLineComponent],
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
