import { HttpClientModule } from '@angular/common/http';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

type ContactDetail = {
  detailType: string;
  icon: string;
  detailValue: string;
};

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, HttpClientModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent implements OnInit {
  name: string = 'Contact Me';
  contactDetails: Array<ContactDetail> = [
    {
      detailType: 'E-mail',
      icon: '../../assets/email.svg',
      detailValue: 'mailto:vihaan1303@gmail.com?subject=Reaching out for',
    },
    {
      detailType: 'LinkedIn',
      icon: '../../assets/linkedin-icon.svg',
      detailValue: 'https://www.linkedin.com/in/vihaan-tewari-9454bb1a6/',
    },
    {
      detailType: 'GitHub',
      icon: '../../assets/github-tile.svg',
      detailValue: 'https://github.com/thebasher21',
    },
    {
      detailType: 'Resume',
      icon: '../../assets/resume-icon.svg',
      detailValue:
        'https://docs.google.com/document/d/1gknWC-fA6l5H4p5dEopuxk_eLDS93SAt-i6rzejNQo8/edit?usp=sharing',
    },
  ];
  @ViewChild('Contact Me') sectionRef: ElementRef = inject(ElementRef);
  isInView = false;
  // matIconRegistry: MatIconRegistry = inject(MatIconRegistry);
  // constructor() {
  //   this.matIconRegistry.addSvgIcon('linkedin', '../../assets/linkedin.svg');
  //   this.matIconRegistry.addSvgIcon('resume', '../../assets/file-solid.svg');
  //   this.matIconRegistry.addSvgIcon('github', '../../assets/square-github.svg');
  // }
  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      this.isInView = entries[0].isIntersecting;
    });
    observer.observe(this.sectionRef.nativeElement);
  }
}
