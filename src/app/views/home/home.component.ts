import { Component } from '@angular/core';
import { CommonBarComponent } from "../../layouts/common-bar/common-bar.component";
import { AboutPageComponent } from "../../layouts/about-page/about-page.component";
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from "../../layouts/contact-page/contact-page.component";
import { ProjectPageComponent } from "../../layouts/project-page/project-page.component";
import { CareerSnapshotComponent } from "../../layouts/career-snapshot/career-snapshot.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutPageComponent, CommonModule, ContactPageComponent, ProjectPageComponent, CareerSnapshotComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
activeId : number = 1;

changePage(id: number) {
  this.activeId = id;

}
}
