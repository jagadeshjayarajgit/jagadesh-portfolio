import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-common-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-bar.component.html',
  styleUrl: './common-bar.component.css'
})
export class CommonBarComponent {
personalDetails = [
  {
    name: 'Jagadesh Jayaraj',
    designation: 'Software Engineer',
    location: 'Chennai, India',
    phoneNo:'9841735345',
    email:'jagadeshjayaraj11@gmail.com',
    birthday:'11-Nov-2002'
      
  }
]

downloadResume() {
  const link = document.createElement('a');
  link.href = 'assets/img/JAGADESH RESUME.pdf';
  link.download = 'Jagadesh_Resume.pdf';
  link.click();
}
}
