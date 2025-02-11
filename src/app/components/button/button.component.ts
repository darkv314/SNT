import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'custom-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  text = input.required();
  isPrimary = input(true);
  isSecondary = input(false);
}
