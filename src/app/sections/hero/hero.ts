import { Component } from '@angular/core';
import { PROFILE, SKILLS } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly profile = PROFILE;

  /** Primeras tecnologías de frontend y backend que se muestran en la ventana de código. */
  protected readonly frontend = SKILLS.find((g) => g.area === 'Frontend')?.skills.slice(0, 3) ?? [];
  protected readonly backend = SKILLS.find((g) => g.area === 'Backend')?.skills.slice(0, 3) ?? [];
  protected readonly ai = SKILLS.find((g) => g.area === 'IA aplicada al desarrollo')?.skills.slice(0, 3) ?? [];
}
