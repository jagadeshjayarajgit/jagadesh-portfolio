import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineStep {
  phase: string;
  tool: string;
  action: string;
  output: string;
}

@Component({
  selector: 'app-ai-tools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-tools.component.html',
  styleUrl: './ai-tools.component.css'
})
export class AiToolsComponent {

  steps: TimelineStep[] = [
    {
      phase: 'Research',
      tool: 'ChatGPT · Perplexity',
      action: 'Surface pain points and gather technical context without SEO noise',
      output: '"Users drop off at step 3 — value prop is unclear on the landing page"',
    },
    {
      phase: 'Architecture',
      tool: 'Claude',
      action: 'Think through system design and trade-offs before writing a single line',
      output: '"Decouple auth via JWT interceptor, not session — cleaner separation of concerns"',
    },
    {
      phase: 'Build',
      tool: 'GitHub Copilot · Cursor',
      action: 'Autocomplete boilerplate, cross-file refactors, faster test coverage',
      output: '@GetMapping("/users/{id}") with validation and error handling — scaffolded',
    },
    {
      phase: 'Debug & Review',
      tool: 'Claude',
      action: 'Catch edge cases, explain cryptic errors, review my own logic cold',
      output: '"NPE risk on line 42 — wrap with Optional.ofNullable() here"',
    },
    {
      phase: 'UI Prototype',
      tool: 'v0',
      action: 'Skip the markup grind — prompt to component, validate layout fast',
      output: 'Dark mode card with hover state — generated in one prompt',
    },
  ];
}
