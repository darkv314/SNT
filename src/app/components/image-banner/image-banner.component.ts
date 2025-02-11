import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image-banner',
  imports: [],
  templateUrl: './image-banner.component.html',
  host: {
    class: 'contents'
  }
})
export class ImageBannerComponent {
  title = input('title');
  imageUrl = input('imageUrl');
}
