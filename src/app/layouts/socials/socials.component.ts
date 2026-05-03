import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL } from '../../data/personal.data';

interface SocialLink {
  platform: string;
  handle: string;
  icon: string;
  description: string;
  url: string;
  color: string;
  glow: string;
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
      description: 'Browse my repos, open-source work and side projects.',
      url: PERSONAL.github,
      color: '#c9d1d9',
      glow: 'rgba(201, 209, 217, 0.15)',
    },
    {
      platform: 'LinkedIn',
      handle: 'Jagadesh Jayaraj',
      icon: 'bi-linkedin',
      description: 'Connect with me professionally — opportunities & collabs.',
      url: PERSONAL.linkedin,
      color: '#0a66c2',
      glow: 'rgba(10, 102, 194, 0.2)',
    },
    {
      platform: 'Twitter / X',
      handle: '@jagadeshj',
      icon: 'bi-twitter-x',
      description: 'Dev thoughts, tech takes and the occasional musing.',
      url: PERSONAL.twitter,
      color: '#e7e9ea',
      glow: 'rgba(231, 233, 234, 0.12)',
    },
    {
      platform: 'LeetCode',
      handle: '@jagadeshj',
      icon: 'bi-code-slash',
      description: 'My DSA journey — problem solving and algorithm practice.',
      url: PERSONAL.leetcode,
      color: '#ffa116',
      glow: 'rgba(255, 161, 22, 0.2)',
    },
  ];

  /* ── Contact logic ── */
  copied: 'email' | 'phone' | null = null;
  sent = false;

  readonly email = PERSONAL.email;
  readonly phone = PERSONAL.phone;
  readonly whatsapp = PERSONAL.whatsapp;
  readonly linkedin = PERSONAL.linkedin;

  copy(type: 'email' | 'phone', value: string) {
    navigator.clipboard.writeText(value).then(() => {
      this.copied = type;
      setTimeout(() => (this.copied = null), 2000);
    });
  }

  sendMail(name: string, subject: string, message: string) {
    if (!name.trim() && !message.trim()) return;
    const sub = encodeURIComponent(subject || 'Hello from your portfolio');
    const body = encodeURIComponent(`Hi Jagadesh,\n\n${message}\n\nFrom: ${name}`);
    window.open(`mailto:${this.email}?subject=${sub}&body=${body}`);
    this.sent = true;
    setTimeout(() => (this.sent = false), 3000);
  }
}
