import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, Directive, ElementRef, HostListener, input, TemplateRef, viewChild } from '@angular/core';
import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel'
import { ArrowLeftComponent } from "../icons/arrow-left/arrow-left.component";
import { ArrowRightComponent } from "../icons/arrow-right/arrow-right.component";

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
  imports: [CarouselDirective, NgTemplateOutlet, ArrowLeftComponent, ArrowRightComponent, NgClass],
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
    this.carouselApi = EmblaCarousel(this.carousel().element.nativeElement, {loop: true, dragFree: true});
  }

  next() {
    this.carouselApi?.scrollNext();
  }

  prev() {
    this.carouselApi?.scrollPrev();
  }

  isDragging = false;

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.isDragging = false;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    this.isDragging = false;
  }
}
