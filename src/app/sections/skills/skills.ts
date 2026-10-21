import { Component } from '@angular/core';
import { SKILLS } from '../../data/portfolio.data';
import { SkillArea } from '../../data/portfolio.models';
import { Icon, IconName } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';

const AREA_ICONS: Record<SkillArea, IconName> = {
  Frontend: 'layout',
  Backend: 'server',
  'Bases de datos': 'database',
  'DevOps y nube': 'cloud',
  'IA aplicada al desarrollo': 'sparkles',
  'Arquitectura y testing': 'layers',
};

@Component({
  selector: 'app-skills',
  imports: [Icon, RevealDirective],
  template: `
    <section id="tecnologias" class="section alt">
      <div class="container">
        <header class="section-header" appReveal>
          <span class="eyebrow">// tecnologías</span>
          <h2 class="section-title">Mi stack de trabajo</h2>
          <p class="section-subtitle">Tecnologías con las que llevo soluciones de la especificación a producción.</p>
        </header>

        <div class="grid">
          @for (group of skills; track group.area; let i = $index) {
            <article class="card skill-card" appReveal [revealDelay]="i * 80">
              <div class="icon"><app-icon [name]="icons[group.area]" [size]="22" /></div>
              <h3>{{ group.area }}</h3>
              <p>{{ group.description }}</p>
              <ul>
                @for (skill of group.skills; track skill) {
                  <li class="tag">{{ skill }}</li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .alt {
      background: var(--bg-elevated);
      border-block: 1px solid var(--border);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }

    .skill-card {
      padding: 28px;
      box-shadow: none;
      transition: border-color 0.2s ease, translate 0.2s ease;

      &:hover {
        border-color: var(--accent);
        translate: 0 -4px;
      }

      h3 {
        font-size: 1.15rem;
        margin-top: 18px;
      }

      p {
        margin-top: 8px;
        color: var(--text-muted);
        font-size: 0.93rem;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 20px;
      }
    }

    .icon {
      display: grid;
      place-items: center;
      width: 46px;
      height: 46px;
      border-radius: 12px;
      background: var(--accent-soft);
      color: var(--accent);
    }
  `,
})
export class Skills {
  protected readonly skills = SKILLS;
  protected readonly icons = AREA_ICONS;
}
