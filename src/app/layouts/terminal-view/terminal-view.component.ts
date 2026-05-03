import { Component, ElementRef, ViewChild, OnInit, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL } from '../../data/personal.data';

interface Line {
  kind: 'cmd' | 'out' | 'err';
  text: string;
}

@Component({
  selector: 'app-terminal-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terminal-view.component.html',
  styleUrl: './terminal-view.component.css'
})
export class TerminalViewComponent implements OnInit, AfterViewChecked {
  @ViewChild('termBody') termBody!: ElementRef;
  @ViewChild('cmdInput') cmdInput!: ElementRef;

  history: Line[] = [];
  private cmdHistory: string[] = [];
  private histIdx = -1;
  private shouldScroll = false;

  private readonly COMMANDS: Record<string, string[]> = {
    help: [
      'Available commands:',
      '',
      '  --about        Who I am',
      '  --skills       My tech stack',
      '  --contact      Phone number',
      '  --email        Email address',
      '  --location     Where I am based',
      '  --birthday     My birthday',
      '  --resume       Download my resume',
      '  --github       GitHub profile',
      '  --linkedin     LinkedIn profile',
      '  --clear        Clear terminal',
    ],
    '--about': [
      'Software Developer at Dr. Agarwals Eye Hospital, Chennai.',
      'Building scalable web apps with Java, Spring Boot & Angular.',
      'Also running an e-commerce side hustle.',
    ],
    '--skills': [
      'Languages  :  Java · JavaScript · TypeScript · HTML · CSS',
      'Backend    :  Spring Boot · REST APIs',
      'Frontend   :  Angular',
      'Database   :  MySQL',
    ],
    '--contact':  [`+91 ${PERSONAL.phone}`],
    '--email':    [PERSONAL.email],
    '--location': [PERSONAL.location],
    '--birthday': ['11 November 2002'],
    '--resume':   ['Downloading resume...'],
    '--github':   [PERSONAL.github],
    '--linkedin': [PERSONAL.linkedin],
  };

  ngOnInit() {
    this.history = [
      { kind: 'out', text: '╔══════════════════════════════════════╗' },
      { kind: 'out', text: '   Jagadesh\'s Portfolio Terminal v1.0   ' },
      { kind: 'out', text: '╚══════════════════════════════════════╝' },
      { kind: 'out', text: '' },
      { kind: 'out', text: "Type  help  to see all available commands." },
      { kind: 'out', text: '' },
    ];
  }

  ngAfterViewChecked() {
    if (this.shouldScroll) {
      const el = this.termBody?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
      this.shouldScroll = false;
    }
  }

  onKey(event: KeyboardEvent, input: HTMLInputElement) {
    if (event.key === 'Enter') {
      this.submit(input.value);
      input.value = '';
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.histIdx = Math.min(this.histIdx + 1, this.cmdHistory.length - 1);
      input.value = this.cmdHistory[this.histIdx] ?? '';
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.histIdx = Math.max(this.histIdx - 1, -1);
      input.value = this.histIdx === -1 ? '' : this.cmdHistory[this.histIdx];
    }
  }

  submit(raw: string) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    this.cmdHistory.unshift(cmd);
    this.histIdx = -1;
    this.history.push({ kind: 'cmd', text: cmd });

    if (cmd === 'clear' || cmd === '--clear') {
      this.history = [];
      this.shouldScroll = true;
      return;
    }

    const key = this.COMMANDS[cmd] ? cmd : '--' + cmd;
    const output = this.COMMANDS[key];

    if (output) {
      output.forEach(line => this.history.push({ kind: 'out', text: line }));
      if (key === '--resume') this.triggerDownload();
    } else {
      this.history.push({ kind: 'err', text: cmd });
    }

    this.history.push({ kind: 'out', text: '' });
    this.shouldScroll = true;
  }

  focusInput() {
    this.cmdInput?.nativeElement.focus();
  }

  private triggerDownload() {
    const link = document.createElement('a');
    link.href = PERSONAL.resume;
    link.download = PERSONAL.resumeDownloadName;
    link.click();
  }
}
