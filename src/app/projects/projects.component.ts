import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Skill } from '../skills/skills.component';

export type ProjectDetails = {
  projectName: string;
  screenshot: string;
  techStack: Array<Skill>;
  projectDescription: string;
  projectLink: string;
  repoLink: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  name: string = 'Projects';
  projects: Array<ProjectDetails> = [
    {
      projectName: 'mini-financial-information-dashboard',
      screenshot: "../../assets/mini-financial-information-dashboard-screenshot.png",
      techStack: [
        {
          skillName: 'NextJS',
          imageSource: '../../assets/nextjs-icon.svg',
        },
        { skillName: 'ReactJS', imageSource: '../../assets/reactjs-icon.svg' },
        {
          skillName: 'TypeScript',
          imageSource: '../../assets/typescriptlang-icon.svg',
        },
        { skillName: 'HTML', imageSource: '../../assets/html-icon.svg' },
        { skillName: 'CSS', imageSource: '../../assets/css-icon.svg' },
        { skillName: 'Git', imageSource: '../../assets/git-scm-icon.svg' },

      ],
      projectDescription:
        'A Next.js project involving the development of a mock financial information dashboard to demonstrate front-end responsive design and development skills.',
      projectLink: 'https://mini-financial-information-dashboard.vercel.app/pages/login',
      repoLink: 'https://github.com/thebasher21/mini-financial-information-dashboard',
    },
    {
      projectName: 'portfolio-website',
      screenshot: "../../assets/portfolio-website-screenshot.png",
      techStack: [
        {
          skillName: 'Angular',
          imageSource: '../../favicon.ico',
        },
        {
          skillName: 'TypeScript',
          imageSource: '../../assets/typescriptlang-icon.svg',
        },
        { skillName: 'HTML', imageSource: '../../assets/html-icon.svg' },
        { skillName: 'CSS', imageSource: '../../assets/css-icon.svg' },
        { skillName: 'CSS', imageSource: '../../assets/css-icon.svg' },
        { skillName: 'Git', imageSource: '../../assets/git-scm-icon.svg' },

      ],
      projectDescription:
        'An Angular project involving the development of a portfolio website to showcase the projects I have worked on and my experience along with accumulated tech skills.',
      projectLink: 'https://mini-financial-information-dashboard.vercel.app/pages/login',
      repoLink: 'https://github.com/thebasher21/portfolio-website',
    },
  ];
  @ViewChild('Projects') sectionRef: ElementRef = inject(ElementRef);
  isInView = false;
  ngOnInit(): void {
    const observer = new IntersectionObserver(entries => {
      this.isInView = entries[0].isIntersecting;
    });
    observer.observe(this.sectionRef.nativeElement);
  }
}
