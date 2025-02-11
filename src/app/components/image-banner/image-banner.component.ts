import { Component, input } from '@angular/core';

@Component({
  selector: 'image-banner',
  imports: [],
  templateUrl: './image-banner.component.html',
  host: {
    class: 'contents'
  }
})
export class ImageBannerComponent {
  imageTitle = input.required();
  imageUrl = input.required();
  mainText = input.required();
  initialText = input.required();
  lastText = input.required();
}
