import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from '../../layouts/about-page/about-page.component';
import { CareerSnapshotComponent } from '../../layouts/career-snapshot/career-snapshot.component';
import { ProjectPageComponent } from '../../layouts/project-page/project-page.component';
import { SocialsComponent } from '../../layouts/socials/socials.component';
import { TerminalViewComponent } from '../../layouts/terminal-view/terminal-view.component';
import { AiToolsComponent } from '../../layouts/ai-tools/ai-tools.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutPageComponent, CareerSnapshotComponent, ProjectPageComponent, SocialsComponent, TerminalViewComponent, AiToolsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  activeId: number = 1;

  changePage(id: number) {
    this.activeId = id;
  }
}
