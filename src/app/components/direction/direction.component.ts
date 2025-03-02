import { Component, input } from '@angular/core';

@Component({
  selector: 'direction',
  imports: [],
  templateUrl: './direction.component.html',
  styles: ``
})
export class DirectionComponent {
  city = input.required<string>();
  address = input.required<string>();
  email = input.required<string>();
  phone = input.required<string>();
}
