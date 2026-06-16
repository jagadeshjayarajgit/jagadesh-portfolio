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
      name: "Dr. Agarwal's Health Care Limited",
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
              name: 'Legacy System Migration',
              content: 'Contributed to migrating 3 legacy systems — Patient Reports, Penta, and YPP Billings — from .NET/PHP monoliths to a Spring Boot microservices backend and Angular frontend over 18 months.\n\nEliminated system crashes on large report loads by converting synchronous APIs to asynchronous architecture, resulting in a significantly more stable and scalable platform across the hospital network.'
            },
            {
              name: 'Patient-Facing Visit App',
              content: 'Deployed a patient-facing web app for on-demand access to visit reports and medical records across all Dr. Agarwal\'s hospital branches.\n\nReduced dependency on front-desk staff for report retrieval, enabling patients to independently access their health information at any time from any device.'
            },
            {
              name: 'Hospital Management System',
              content: 'Built a Hospital Management System digitizing workflows for 10+ hospital roles, replacing entirely paper-based processes for approvals, refunds, IP bookings, insurance pre-auth, and inventory tracking.\n\nThe system enforces role-based access controls ensuring each staff role sees only what is relevant to their responsibilities, improving both security and operational efficiency.'
            },
            {
              name: 'EMR System (In Progress)',
              content: 'Currently developing a single-page EMR system for the entire Dr. Agarwal\'s network, consolidating fragmented workflows into a unified past/present view to reduce consultation documentation time.\n\nWorking closely with doctors and clinical staff to design interfaces that feel natural during consultations, making digital documentation as low-friction as possible.'
            },
            {
              name: 'PWA – Patient Report',
              content: 'Engineered a Progressive Web App for patient report management, cutting report retrieval time by 50% for 500+ healthcare professionals across the hospital network.\n\nThe app works offline and leverages caching strategies to ensure fast, reliable access even in low-connectivity environments — particularly important for clinical staff on the move.'
            },
          ]
        },
        {
          name: 'Technical Work',
          expanded: true,
          files: [
            {
              name: 'Microservices Architecture',
              content: 'Designed and built RESTful APIs as part of a microservices architecture using Spring Boot, Hibernate, and JPA. Each service is scoped to a specific domain, making the overall system modular and independently scalable.\n\nFocused on clean API contracts, proper HTTP semantics, and consistent error handling to ensure smooth integration across services and teams.'
            },
            {
              name: 'Authentication & Security',
              content: 'Implemented Spring Security with JWT-based authentication and role-based access control across all modules, ensuring patient and hospital data remains protected.\n\nAdditionally configured OTP-based verification using Redis for session management, balancing strong security requirements with a smooth user experience for clinical staff.'
            },
            {
              name: 'Async API Conversion',
              content: 'Converted synchronous report-loading APIs to asynchronous architecture as part of the legacy migration initiative.\n\nThis change directly eliminated the system crashes that occurred under heavy load — a critical improvement given the hospital\'s scale and the real-time demands of clinical operations.'
            }
          ]
        }
      ]
    },
    {
      name: 'bridgelabz',
      role: 'Software Developer Intern',
      period: 'Jan 2024 – Apr 2024',
      logo: null,
      initials: 'BL',
      expanded: true,
      folders: [
        {
          name: 'Training',
          expanded: true,
          files: [
            {
              name: 'Java Backend Program',
              content: 'Completed an intensive Java backend training program, building foundational skills in Spring Boot, microservices architecture, OOP principles, SOLID design, and SQL data modeling through structured assignments and hands-on exercises.\n\nThe program covered the full backend development lifecycle — from designing database schemas and writing optimized SQL queries to building service endpoints and wiring them together using Spring\'s dependency injection.'
            },
            {
              name: 'OOP & SOLID Principles',
              content: 'Applied Object-Oriented Programming concepts and SOLID principles through refactoring exercises and design challenges. Worked on structuring code for maintainability, extensibility, and readability.\n\nUsed Java Collections and Streams to simplify complex logic and reduce boilerplate, building habits that carry directly into production-grade development.'
            },
            {
              name: 'RESTful Microservices',
              content: 'Built RESTful microservices using Spring Boot as part of training assignments, including designing service endpoints, implementing business logic, and connecting to the database layer using JPA and Hibernate.\n\nThis internship provided hands-on exposure to the full development cycle — from design to deployment — and prepared the groundwork for professional work at Dr. Agarwal\'s.'
            }
          ]
        }
      ]
    },
    {
      name: 'SRM Institute of Science and Technology',
      role: 'B.Tech — Computer Science & Engineering',
      period: '2020 – 2024',
      logo: 'assets/img/srmLogo.png',
      initials: 'SR',
      expanded: false,
      folders: [
        {
          name: 'Academics',
          expanded: true,
          files: [
            {
              name: 'Degree & CGPA',
              content: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering from SRM Institute of Science and Technology, Chennai.\n\nCGPA: 8.5 / 10.0\nDuration: 2020 – 2024'
            },
            {
              name: 'Final Year Project',
              content: 'Secure Smart Home Data Using Blockchain Technology with Hash Algorithm.\n\nBuilt this project as part of the college curriculum to enhance data security in smart homes. By integrating blockchain and cryptographic hash algorithms, ensured tamper-proof logging of IoT device activities — making the system reliable and resistant to data manipulation.'
            },
            {
              name: 'Certificates',
              content: 'AWS Certified Cloud Practitioner\n\nCompleted the AWS Cloud Practitioner certification, gaining foundational knowledge of cloud computing concepts, core AWS services, security, architecture, pricing, and support.'
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
