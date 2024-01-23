import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';

import { MatChipsModule } from '@angular/material/chips';

type Skill = {
  skillName: string;
  imageSource: string;
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  name: string = 'Skills';
  skills: Array<Skill> = [
    { skillName: 'ReactJS', imageSource: '../../assets/reactjs-icon.svg' },
    { skillName: 'React Native', imageSource: '../../assets/react-native.svg' },
    { skillName: 'Angular', imageSource: '../../favicon.ico' },
    { skillName: 'Python', imageSource: '../../assets/python-icon.svg' },
    {
      skillName: 'MongoDB',
      imageSource: '../../assets/mongodb-icon.svg',
    },
    { skillName: 'SQL', imageSource: '../../assets/mysql-icon.svg' },
    { skillName: 'Docker', imageSource: '../../assets/docker-icon.svg' },
    {
      skillName: 'K8s',
      imageSource: '../../assets/kubernetes-icon.svg',
    },
    { skillName: 'SpringBoot', imageSource: '../../assets/springio-icon.svg' },
    { skillName: 'Git', imageSource: '../../assets/git-scm-icon.svg' },
    {
      skillName: 'Jest',
      imageSource: '../../assets/jestjsio-icon.svg',
    },
    {
      skillName: 'JavaScript',
      imageSource: '../../assets/javascript-icon.svg',
    },
    {
      skillName: 'TypeScript',
      imageSource: '../../assets/typescriptlang-icon.svg',
    },
    {
      skillName: 'NextJS',
      imageSource: '../../assets/nextjs-icon.svg',
    },
  ];
  @ViewChild('Skills') sectionRef: ElementRef = inject(ElementRef);
  isInView = false;
  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      this.isInView = entries[0].isIntersecting;
    });
    observer.observe(this.sectionRef.nativeElement);
  }
}
