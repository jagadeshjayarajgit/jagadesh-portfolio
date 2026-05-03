import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AiTool {
  name: string;
  tagline: string;
  category: 'Code' | 'Research' | 'Design';
  description: string;
  usage: 'Daily' | 'Weekly' | 'Exploring';
  color: string;
  glow: string;
  initials: string;
  active: boolean;
}

@Component({
  selector: 'app-ai-tools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-tools.component.html',
  styleUrl: './ai-tools.component.css'
})
export class AiToolsComponent {

  categoryColors: Record<string, string> = {
    Code:     '#4fc3f7',
    Research: '#a78bfa',
    Design:   '#f472b6',
  };

  tools: AiTool[] = [
    {
      name: 'Claude',
      tagline: 'by Anthropic',
      category: 'Research',
      description: 'My go-to for architecture decisions, code reviews, writing clear docs, and thinking through complex problems before I write a single line.',
      usage: 'Daily',
      color: '#cc785c',
      glow: 'rgba(204, 120, 92, 0.22)',
      initials: 'CL',
      active: true,
    },
    {
      name: 'GitHub Copilot',
      tagline: 'by GitHub × OpenAI',
      category: 'Code',
      description: 'In-editor AI pair programmer. Autocompletes boilerplate, generates test cases, and speeds up repetitive patterns across Spring Boot and Angular.',
      usage: 'Daily',
      color: '#6e40c9',
      glow: 'rgba(110, 64, 201, 0.22)',
      initials: 'GH',
      active: true,
    },
    {
      name: 'ChatGPT',
      tagline: 'by OpenAI',
      category: 'Research',
      description: 'Quick lookups, debugging cryptic error messages, and drafting SQL queries or regex patterns when I need a fast starting point.',
      usage: 'Daily',
      color: '#10a37f',
      glow: 'rgba(16, 163, 127, 0.2)',
      initials: 'GP',
      active: true,
    },
    {
      name: 'Cursor',
      tagline: 'AI-first IDE',
      category: 'Code',
      description: 'Full codebase-aware editor. The chat mode handles cross-file refactors and the tab completion makes writing new features noticeably faster.',
      usage: 'Weekly',
      color: '#5865f2',
      glow: 'rgba(88, 101, 242, 0.2)',
      initials: 'CR',
      active: true,
    },
    {
      name: 'Perplexity',
      tagline: 'AI Search',
      category: 'Research',
      description: 'Research without the SEO noise. Great for up-to-date answers on Spring Security configs, library diffs, and technical comparisons.',
      usage: 'Weekly',
      color: '#20808d',
      glow: 'rgba(32, 128, 141, 0.2)',
      initials: 'PX',
      active: false,
    },
    {
      name: 'v0',
      tagline: 'by Vercel',
      category: 'Design',
      description: 'Prompt-to-UI component generator. Helps me prototype Angular layouts quickly when I want to skip the initial markup grind.',
      usage: 'Exploring',
      color: '#e0e0e0',
      glow: 'rgba(224, 224, 224, 0.1)',
      initials: 'v0',
      active: false,
    },
  ];

  usageBadgeClass(usage: string): string {
    if (usage === 'Daily')     return 'badge-daily';
    if (usage === 'Weekly')    return 'badge-weekly';
    return 'badge-exploring';
  }
}
