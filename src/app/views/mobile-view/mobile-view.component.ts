import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from '../../layouts/about-page/about-page.component';
import { CareerSnapshotComponent } from '../../layouts/career-snapshot/career-snapshot.component';
import { SocialsComponent } from '../../layouts/socials/socials.component';
import { TerminalViewComponent } from '../../layouts/terminal-view/terminal-view.component';
import { ProjectPageComponent } from '../../layouts/project-page/project-page.component';
import { AiToolsComponent } from '../../layouts/ai-tools/ai-tools.component';
import { PERSONAL } from '../../data/personal.data';

type ActiveTab = 'about' | 'career' | 'socials' | 'terminal' | 'projects' | 'ai';

@Component({
  selector: 'app-mobile-view',
  standalone: true,
  imports: [CommonModule, AboutPageComponent, CareerSnapshotComponent, SocialsComponent, TerminalViewComponent, ProjectPageComponent, AiToolsComponent],
  templateUrl: './mobile-view.component.html',
  styleUrl: './mobile-view.component.css'
})
export class MobileViewComponent {
  activeTab: ActiveTab = 'about';
  drawerOpen = false;

  readonly p = PERSONAL;

  setTab(tab: ActiveTab) {
    this.activeTab = tab;
    this.drawerOpen = false;
  }

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }

  closeDrawer() {
    this.drawerOpen = false;
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = PERSONAL.resume;
    link.download = PERSONAL.resumeDownloadName;
    link.click();
  }
}
