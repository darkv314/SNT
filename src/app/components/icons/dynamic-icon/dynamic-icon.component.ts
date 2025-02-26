import {
  Component,
  Directive,
  input,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { ICONS } from '../icons-mapping';
import { CommonModule } from '@angular/common';

@Directive({
  selector: '[dynamicComponentContainer]',
  standalone: true,
})
export class DynamicComponentContainerDirective {}

@Component({
  selector: 'dynamic-icon',
  standalone: true,
  imports: [DynamicComponentContainerDirective, CommonModule],
  templateUrl: './dynamic-icon.component.html',
})
export class DynamicIconComponent {
  icon = input.required<string>();
  container = viewChild.required(DynamicComponentContainerDirective, {
    read: ViewContainerRef,
  });

  ngOnChanges() {
    this.loadComponent();
  }

  loadComponent() {
    this.container().clear();

    const component = ICONS.get(this.icon());
    if (component) {
      this.container().createComponent(component);
    }
  }
}
