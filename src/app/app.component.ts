import { Component } from '@angular/core';
import { CommonBarComponent } from "./layouts/common-bar/common-bar.component";
import { HomeComponent } from "./views/home/home.component";
import { MobileViewComponent } from "./views/mobile-view/mobile-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonBarComponent, HomeComponent, MobileViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jagadesh-portfolio';
}
