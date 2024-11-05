import { Component, Input } from '@angular/core';
import { ProjectDetails } from '../projects/projects.component';
import { SkillChipComponent } from '../skill-chip/skill-chip.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [SkillChipComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() projectDetails!: ProjectDetails;
}
