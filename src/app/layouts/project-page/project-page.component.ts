import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  category: string;
  image: string;
  url: string | null;
}

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent {

  projects: Project[] = [
    {
      name: 'StryPers Hub',
      category: 'Web development',
      image: 'https://image.thum.io/get/width/600/crop/380/noanimate/https://strypershub.vercel.app/profilepage',
      url: 'https://strypershub.vercel.app/profilepage',
    },
  ];
}
