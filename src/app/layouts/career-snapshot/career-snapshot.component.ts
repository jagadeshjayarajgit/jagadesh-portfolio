import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

interface CareerFile {
  name: string;
  content: string;
}

interface CareerFolder {
  name: string;
  files: CareerFile[];
  expanded: boolean;
}

interface Company {
  name: string;
  role: string;
  period: string;
  logo: string | null;
  initials: string;
  folders: CareerFolder[];
  expanded: boolean;
}

@Component({
  selector: 'app-career-snapshot',
  standalone: true,
  imports: [NgClass],
  templateUrl: './career-snapshot.component.html',
  styleUrl: './career-snapshot.component.css'
})
export class CareerSnapshotComponent implements OnInit {

  selectedFile: CareerFile | null = null;
  selectedCompany: Company | null = null;

  companies: Company[] = [
    {
      name: "Dr. Agarwal's Eye Hospital",
      role: 'Software Developer',
      period: 'Apr 2024 – Present',
      logo: 'assets/img/drlogo.jpeg',
      initials: 'DA',
      expanded: true,
      folders: [
        {
          name: 'Projects',
          expanded: true,
          files: [
            {
              name: 'PWA – Patient Report',
              content: 'Built a Progressive Web App for patient report management, improving retrieval times by 50% for 500+ healthcare professionals across the hospital network.'
            },
            {
              name: 'Hospital Management System',
              content: 'Developed the Hospital Management System covering inventory management, stock tracking, patient workflows (OP/IP), and approval hierarchies with role-based governance.'
            },
            {
              name: 'EMR System',
              content: 'Currently developing an Electronic Medical Records (EMR) system for doctors and clinical staff, enabling structured digital documentation of patient encounters.'
            },
            {
              name: 'Digital Patient Visit App',
              content: 'Developed a Digital Patient Visit Details Web App that allows patients to access their visit reports and medical summaries anytime, anywhere via a mobile-friendly interface.'
            }
          ]
        },
        {
          name: 'Technical Work',
          expanded: true,
          files: [
            {
              name: 'System Migration',
              content: 'Migrated legacy systems to Java 8 (Spring Boot) adhering to SOLID principles, and re-architected the frontend with Angular 18 and Redux, significantly enhancing maintainability and runtime performance.'
            },
            {
              name: 'REST APIs & Microservices',
              content: 'Developed and optimized RESTful APIs within a microservices architecture using Spring Boot, Hibernate, and JPA — ensuring clean service boundaries and efficient data access across all services.'
            },
            {
              name: 'Authentication & Security',
              content: 'Implemented secure authentication with OTP verification backed by Redis, Spring Security configuration, and fine-grained role-based access controls across all modules.'
            }
          ]
        }
      ]
    },
    {
      name: 'BridgeLabz',
      role: 'Software Developer Intern',
      period: 'Jan 2024 – Apr 2024',
      logo: null,
      initials: 'BL',
      expanded: true,
      folders: [
        {
          name: 'Work Done',
          expanded: true,
          files: [
            {
              name: 'OOP & SOLID Principles',
              content: 'Applied Object-Oriented Programming concepts and SOLID principles across training modules. Optimized code logic using Java Collections and Streams to improve readability, maintainability, and functional correctness of existing modules.'
            },
            {
              name: 'RESTful Microservices',
              content: 'Contributed to building RESTful microservices with Spring Boot, handling service design, endpoint implementation, and SQL data modelling for efficient database schema design and queries.'
            }
          ]
        }
      ]
    }
  ];

  ngOnInit() {
    const firstCompany = this.companies[0];
    const firstFile = firstCompany?.folders[0]?.files[0] ?? null;
    this.selectedFile = firstFile;
    this.selectedCompany = firstCompany ?? null;
  }

  toggleCompany(company: Company) {
    company.expanded = !company.expanded;
  }

  toggleFolder(folder: CareerFolder) {
    folder.expanded = !folder.expanded;
  }

  selectFile(file: CareerFile, company: Company) {
    this.selectedFile = file;
    this.selectedCompany = company;
  }
}
