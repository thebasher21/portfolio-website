import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { SectionItem } from '../app.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [
    AboutMeComponent,
    ContactMeComponent,
    SkillsComponent,
    ProjectsComponent,
  ],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.scss',
})
export class SectionsComponent implements AfterViewInit {
  @ViewChild('vc', { read: ViewContainerRef })
  container: ViewContainerRef = inject(ViewContainerRef);
  contentSections: Array<SectionItem> = [
    { name: 'About Me', component: AboutMeComponent },
    { name: 'Skills', component: SkillsComponent },
    { name: 'Projects', component: ProjectsComponent },
    { name: 'Contact Me', component: ContactMeComponent },
  ];
  cdRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  ngAfterViewInit() {
    for (const section of this.contentSections) {
      let component = this.contentSections.find((c) => c.name === section.name);
      if (component) {
        let ref = this.container.createComponent(component.component);
      }
    }
    this.cdRef.detectChanges();
  }
}
