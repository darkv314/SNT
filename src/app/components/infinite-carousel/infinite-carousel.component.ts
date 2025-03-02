import { Component, input } from '@angular/core';

@Component({
  selector: 'infinite-carousel',
  imports: [],
  templateUrl: './infinite-carousel.component.html',
  host: {
    class: 'contents'
  }
})
export class InfiniteCarouselComponent {
  animationRow = Array(3).fill(0) as [number, number];
  items = input.required<{src: string, title: string}[]>();
}
