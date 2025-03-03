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
  imageTitle = input.required<string>();
  imageUrl = input.required<string>();
  mainText = input<string>();
  initialText = input<string>();
  lastText = input<string>();
}
