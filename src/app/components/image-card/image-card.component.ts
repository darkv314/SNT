import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'image-card',
  imports: [NgClass],
  templateUrl: './image-card.component.html',
  host: {
    class: ''
  },
})
export class ImageCardComponent {
  title = input<string>();
  imgSrc = input<string>();
  imgTitle = input<string>();
  description = input<string>();
  noText = input<boolean>(false);
}
