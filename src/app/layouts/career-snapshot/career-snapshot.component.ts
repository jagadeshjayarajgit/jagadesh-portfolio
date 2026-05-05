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
              content: 'Built a Progressive Web App that helps healthcare professionals access patient reports quickly and reliably. The app works offline and loads faster than the previous system, which has been particularly helpful for doctors and nurses who need information on the go.\n\nThe system now serves over 500 healthcare professionals across our hospital network. By optimizing data retrieval and caching strategies, we managed to cut report loading times in half. It has been rewarding to see how these improvements help staff spend less time waiting and more time with patients.'
            },
            {
              name: 'Hospital Management System',
              content: 'Worked on developing a comprehensive management system that handles day to day hospital operations. This includes managing inventory and stock levels, tracking patient journeys from outpatient to inpatient care, and implementing approval workflows that respect the hospital\'s organizational hierarchy.\n\nThe system uses role based access controls to ensure that staff members can only see and modify information relevant to their responsibilities. This has helped streamline operations while maintaining security and accountability. I collaborated closely with different departments to understand their workflows and build features that actually fit how they work.'
            },
            {
              name: 'EMR System',
              content: 'Currently developing an Electronic Medical Records system designed specifically for doctors and clinical staff. The goal is to make digital documentation as intuitive as possible, so doctors can focus on patient care rather than struggling with software.\n\nThe system allows structured recording of patient encounters, medical history, diagnosis, and treatment plans. I am working with medical professionals to understand their documentation needs and build interfaces that feel natural to them. It is still a work in progress, but early feedback from the pilot users has been encouraging.'
            },
            {
              name: 'Digital Patient Visit App',
              content: 'Created a mobile friendly web application that gives patients easy access to their visit records and medical summaries. Patients can now review their reports, prescriptions, and test results from their phones whenever they need them, without having to call the hospital or visit in person.\n\nThe app was designed with simplicity in mind, as many of our patients are not tech savvy. We focused on clear layouts, readable fonts, and straightforward navigation. It has been nice to hear from patients who appreciate being able to access their health information independently.'
            }
          ]
        },
        {
          name: 'Technical Work',
          expanded: true,
          files: [
            {
              name: 'System Migration',
              content: 'Led the migration of several legacy systems to a more modern technology stack. On the backend, we upgraded to Java 8 with Spring Boot, restructuring the code to follow SOLID principles. This made the codebase easier to maintain and extend as requirements evolve.\n\nFor the frontend, we rebuilt the user interface using Angular 18 with Redux for state management. The new architecture loads faster and provides a smoother user experience. The migration was challenging since we had to ensure zero downtime and no data loss, but careful planning and phased rollouts helped us pull it off successfully.'
            },
            {
              name: 'REST APIs & Microservices',
              content: 'Developed RESTful APIs as part of our microservices architecture using Spring Boot, Hibernate, and JPA. Each service is designed to handle a specific domain, which makes the system more modular and easier to scale as the hospital grows.\n\nI focused on writing clean, well documented APIs that other developers can easily work with. Proper use of HTTP methods, status codes, and error handling has made integration smoother across teams. Working with microservices taught me a lot about designing for failure and ensuring services communicate reliably even when parts of the system are under heavy load.'
            },
            {
              name: 'Authentication & Security',
              content: 'Implemented authentication mechanisms to keep patient and hospital data secure. This includes OTP based verification using Redis for session management, along with Spring Security configurations that enforce proper access controls throughout the application.\n\nEvery module has role based permissions, so users only see and access what they are authorized for. Security is especially important in healthcare, so I made sure to follow best practices around password handling, session timeouts, and secure API communication. It has been a learning experience balancing security requirements with user convenience.'
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
              content: 'Spent time learning and applying Object Oriented Programming concepts and SOLID principles through various training modules. I worked on refactoring existing code to make it more maintainable and easier for others to understand.\n\nUsed Java Collections and Streams to simplify complex logic and improve code readability. It was a great opportunity to build a strong foundation in writing clean, functional code. The training emphasized not just making code work, but making it work well and last long.'
            },
            {
              name: 'RESTful Microservices',
              content: 'Contributed to building RESTful microservices using Spring Boot. My work included designing service endpoints, implementing business logic, and connecting services to the database layer.\n\nI also worked on SQL data modeling, creating efficient database schemas and writing optimized queries. This internship taught me how backend services come together in a real application and gave me hands on experience with the full development cycle from design to deployment. The mentorship I received here was invaluable in preparing me for professional development work.'
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
