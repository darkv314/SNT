import { Component, Directive, input } from '@angular/core';

@Component({
  selector: 'info-card',
  imports: [],
  templateUrl: './info-card.component.html',
})
export class InfoCardComponent {
  title = input.required<string>()
  description = input.required<string>()
}
