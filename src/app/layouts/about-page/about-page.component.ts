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
    { name: 'JavaScript',  icon: 'assets/img/java-script.png' },
    { name: 'HTML',        icon: 'assets/img/htmlicon.png' },
    { name: 'CSS',         icon: 'assets/img/css-3.png' },
  ];

  aiStack = [
    { name: 'Claude Code', icon: 'assets/img/claude-code-logo.png' },
    { name: 'Codex', icon: 'assets/img/openai-light.png' },
    {name : 'Cursor', icon:'assets/img/cursor-dark.png'}
  ]

  timeline = [
    {
      period: '2024 - Present',
      title: 'Software Developer',
      subtitle: 'Dr. Agarwals Eye Hospital, Corporate Office',
      description: 'Currently working as a Software Developer, gaining hands-on experience in building scalable web applications for hospital operations.',
      logo: 'assets/img/drlogo.jpeg',
      logoAlt: 'AgarwalsLogo',
      type: 'work'
    },
    {
      period: '2020 - 2024',
      title: 'Under Graduate — B.Tech CSE',
      subtitle: 'SRM University',
      description: 'Completed B.Tech in Computer Science and Engineering with First Class Distinction.',
      logo: 'assets/img/srmLogo.png',
      logoAlt: 'SRM Logo',
      type: 'education'
    },
    
  ];

}
