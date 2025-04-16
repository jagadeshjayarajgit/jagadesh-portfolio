import { Component } from '@angular/core';
import { CommonBarComponent } from "./layouts/common-bar/common-bar.component";
import { HomeComponent } from "./views/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonBarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jagadesh-portfolio';
}
