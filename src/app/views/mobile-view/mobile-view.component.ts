import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from '../../layouts/about-page/about-page.component';
import { CareerSnapshotComponent } from '../../layouts/career-snapshot/career-snapshot.component';
import { ContactPageComponent } from '../../layouts/contact-page/contact-page.component';
import { SocialsComponent } from '../../layouts/socials/socials.component';
import { TerminalViewComponent } from '../../layouts/terminal-view/terminal-view.component';

type ActiveTab = 'about' | 'career' | 'contact' | 'socials' | 'terminal';

@Component({
  selector: 'app-mobile-view',
  standalone: true,
  imports: [CommonModule, AboutPageComponent, CareerSnapshotComponent, ContactPageComponent, SocialsComponent, TerminalViewComponent],
  templateUrl: './mobile-view.component.html',
  styleUrl: './mobile-view.component.css'
})
export class MobileViewComponent {
  activeTab: ActiveTab = 'about';
  drawerOpen = false;

  personalDetails = {
    name: 'Jagadesh Jayaraj',
    designation: 'Software Developer',
    location: 'Chennai, India',
    phoneNo: '9841735345',
    email: 'jagadeshjayaraj11@gmail.com',
    birthday: '11-Nov-2002'
  };

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
    link.href = 'assets/img/JAGADESH RESUME.pdf';
    link.download = 'Jagadesh_Resume.pdf';
    link.click();
  }
}
