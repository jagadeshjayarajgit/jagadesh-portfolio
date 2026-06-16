import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [NgClass],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

  techStack = [
    { name: 'Java',        icon: 'assets/img/java.png' },
    { name: 'Spring Boot', icon: 'assets/img/icons8-spring-boot-48.png' },
    { name: 'Angular',     icon: 'assets/img/programing.png' },
    { name: 'TypeScript',  icon: 'assets/img/typescript.png' },
    { name: 'JavaScript',  icon: 'assets/img/java-script.png' },
    { name: 'HTML',        icon: 'assets/img/htmlicon.png' },
    { name: 'CSS',         icon: 'assets/img/css-3.png' },
  ];

  aiStack = [
    { name: 'Claude Code', icon: 'assets/img/claude-code-logo.png' },
    { name: 'Codex',       icon: 'assets/img/openai-light.png' },
    { name: 'Cursor',      icon: 'assets/img/cursor-dark.png' },
  ];

  timeline = [
    {
      period: 'Apr 2024 – Present',
      title: 'Software Developer',
      subtitle: 'Dr. Agarwal\'s Health Care Limited, Chennai',
      description: 'Building enterprise healthcare software across patient management, clinical workflows, and multi-role hospital operations. Migrated 3 legacy systems to Spring Boot microservices + Angular, engineered a PWA cutting report retrieval by 50% for 500+ professionals, and currently developing a single-page EMR system.',
      logo: 'assets/img/drlogo.jpeg',
      logoAlt: 'Agarwals Logo',
      type: 'work'
    },
    {
      period: 'Jan 2024 – Apr 2024',
      title: 'Software Developer Intern',
      subtitle: 'bridgelabz',
      description: 'Completed an intensive Java backend training program, building foundational skills in Spring Boot, microservices architecture, OOP principles, SOLID design, and SQL data modeling through structured assignments and hands-on exercises.',
      logo: null,
      logoAlt: 'BridgeLabz',
      type: 'work'
    },
    {
      period: '2020 – 2024',
      title: 'B.Tech — Computer Science & Engineering',
      subtitle: 'SRM Institute of Science and Technology, Chennai',
      description: 'Bachelor of Technology in Computer Science and Engineering. CGPA: 8.5 / 10.0. Final year project: Secure Smart Home Data Using Blockchain Technology with Hash Algorithm.',
      logo: 'assets/img/srmLogo.png',
      logoAlt: 'SRM Logo',
      type: 'education'
    },
  ];

}
