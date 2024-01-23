import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { SectionsComponent } from './sections/sections.component';
export type SectionItem = {
  name: string;
  component: any;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    AboutMeComponent,
    ContactMeComponent,
    SkillsComponent,
    ProjectsComponent,
    SectionsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-website';
  theme = 'light_mode_outline';
  contentSections: Array<SectionItem> = [
    { name: 'About Me', component: AboutMeComponent },
    { name: 'Skills', component: SkillsComponent },
    { name: 'Projects', component: ProjectsComponent },
    { name: 'Contact Me', component: ContactMeComponent },
  ];
  toggleTheme() {
    if (this.theme === 'light_mode_outline') {
      this.theme = 'dark_mode_outline';
    } else {
      this.theme = 'light_mode_outline';
    }
  }
  scroll(elementId: string) {
    try {
      let el: HTMLElement | null = document.getElementById(elementId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        console.log('Scrolling to ' + el.getAttribute(elementId));
      } else {
        throw new Error(`Unable to find element to scroll to`);
      }
    } catch (e: any) {
      console.error(e);
    }
  }
}
