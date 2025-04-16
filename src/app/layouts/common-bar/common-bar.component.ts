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
    email:'itsjagajayaraj@gmail.com',
    birthday:'11-Nov-2002'
      
  }
]
}
