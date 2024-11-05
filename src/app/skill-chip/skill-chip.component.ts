import { Component, Input } from '@angular/core';
import { Skill } from '../skills/skills.component';

@Component({
  selector: 'app-skill-chip',
  standalone: true,
  imports: [],
  templateUrl: './skill-chip.component.html',
  styleUrl: './skill-chip.component.scss',
})
export class SkillChipComponent {
  @Input() skillDetails!: Skill;
}
