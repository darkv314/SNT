import { Component, ElementRef, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./pages/components/nav/nav.component";
import { FooterComponent } from "./pages/components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  footerRef = viewChild<FooterComponent>('footer');
  scrollToFooter() {
    this.footerRef()?.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
