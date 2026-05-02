import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  copied: 'email' | 'phone' | null = null;
  sent = false;

  readonly email = 'jagadeshjayaraj11@gmail.com';
  readonly phone = '9841735345';
  readonly whatsapp = 'https://wa.me/919841735345';
  readonly linkedin = 'https://linkedin.com/in/jagadesh';

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
