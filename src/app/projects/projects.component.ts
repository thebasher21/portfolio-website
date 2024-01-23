import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';

export type ProjectDetails = {
  projectName: string;
  techStack: Array<string>;
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
      techStack: ['NextJS', 'React', 'TypeScript', 'HTML', 'CSS'],
      projectDescription:
        'A Next.js project involving the development of a mock financial information dashboard to demonstrate front-end responsive design and development skills.',
      projectLink:
        'https://mini-financial-information-dashboard.vercel.app/pages/login',
      repoLink:
        'https://github.com/thebasher21/mini-financial-information-dashboard',
    },
  ];
  @ViewChild('Projects') sectionRef: ElementRef = inject(ElementRef);
  isInView = false;
  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      this.isInView = entries[0].isIntersecting;
    });
    observer.observe(this.sectionRef.nativeElement);
  }
}
