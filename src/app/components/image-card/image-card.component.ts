import { Component, input } from '@angular/core';

@Component({
  selector: 'image-card',
  imports: [],
  templateUrl: './image-card.component.html',
})
export class ImageCardComponent {
  title = input<string>();
  imgSrc = input<string>();
  imgTitle = input<string>();
  description = input<string>();
}
