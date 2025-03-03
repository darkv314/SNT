import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'image-info',
  imports: [NgClass],
  templateUrl: './image-info.component.html',
  styleUrls: ['./image-info.component.scss'],
  host: {
    class: 'contents'
  }
})
export class ImageInfoComponent {
  imgUrl = input.required<string>();
  title = input.required<string>();
  left = input<boolean>(false);
}
