import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, Directive, ElementRef, input, TemplateRef, viewChild } from '@angular/core';
import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel'

@Directive({
  selector: '[carouselDirective]'
})
export class CarouselDirective {
  constructor(public element: ElementRef) {
  }
}

@Directive({
  selector: '[slideTemplate]'
})
export class SlideTemplateDirective {
}

@Component({
  selector: 'carousel',
  imports: [CarouselDirective, NgTemplateOutlet],
  templateUrl: './carousel.component.html',
  styleUrls: [`./carousel.component.css`]
})
export class CarouselComponent<T> {
  slides = input.required<T[]>();
  carousel = viewChild.required<CarouselDirective>(CarouselDirective);
  slideTemplate = contentChild.required(SlideTemplateDirective, {read: TemplateRef<{
    $implicit: T
  }>})

  carouselApi: EmblaCarouselType | undefined;

  ngAfterViewInit(): void {
    this.carouselApi = EmblaCarousel(this.carousel().element.nativeElement);
  }

  next() {
    this.carouselApi?.scrollNext();
  }

  prev() {
    this.carouselApi?.scrollPrev();
  }
}
