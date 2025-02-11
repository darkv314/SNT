import { Component, input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'image-banner',
  imports: [ButtonComponent],
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
