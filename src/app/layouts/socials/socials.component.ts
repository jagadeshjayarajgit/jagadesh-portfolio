import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SocialLink {
  platform: string;
  handle: string;
  icon: string;
  description: string;
  url: string;
  tag: string;
}

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.css'
})
export class SocialsComponent {
  socials: SocialLink[] = [
    {
      platform: 'GitHub',
      handle: '@jagadesh-j',
      icon: 'bi-github',
      description: 'Explore my repositories, open-source contributions and side projects.',
      url: 'https://github.com/',
      tag: 'Code'
    },
    {
      platform: 'LinkedIn',
      handle: 'Jagadesh Jayaraj',
      icon: 'bi-linkedin',
      description: 'Connect with me professionally — opportunities, collabs & networking.',
      url: 'https://linkedin.com/',
      tag: 'Professional'
    },
    {
      platform: 'Twitter / X',
      handle: '@jagadeshj',
      icon: 'bi-twitter-x',
      description: 'Dev thoughts, tech takes and the occasional random musing.',
      url: 'https://twitter.com/',
      tag: 'Updates'
    },
    {
      platform: 'LeetCode',
      handle: '@jagadeshj',
      icon: 'bi-code-slash',
      description: 'My problem-solving journey — DSA, competitive programming solutions.',
      url: 'https://leetcode.com/',
      tag: 'DSA'
    }
  ];

  hoveredIndex: number | null = null;
}
