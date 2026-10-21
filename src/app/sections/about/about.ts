import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  template: `
    <section id="sobre-mi" class="section">
      <div class="container about">
        <div appReveal>
          <span class="eyebrow">// sobre mí</span>
          <h2 class="section-title">Del diseño de la interfaz a la base de datos</h2>
          <div class="text">
            @for (paragraph of profile.about; track $index) {
              <p>{{ paragraph }}</p>
            }
          </div>
        </div>

        <ul class="stats">
          @for (stat of profile.stats; track stat.label; let i = $index) {
            <li class="card" appReveal [revealDelay]="i * 100">
              <strong>{{ stat.value }}</strong>
              <span>{{ stat.label }}</span>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .about {
      display: grid;
      grid-template-columns: 1.4fr 1fr;
      gap: 56px;
      align-items: center;

      @media (max-width: 860px) {
        grid-template-columns: 1fr;
      }
    }

    .text {
      display: grid;
      gap: 16px;
      margin-top: 24px;
      color: var(--text-muted);
      font-size: 1.05rem;
    }

    .stats {
      display: grid;
      gap: 16px;

      @media (max-width: 860px) and (min-width: 520px) {
        grid-template-columns: repeat(3, 1fr);
      }

      li {
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      strong {
        font-size: 2.2rem;
        font-weight: 800;
        color: var(--accent);
        line-height: 1;
      }

      span {
        color: var(--text-muted);
        font-size: 0.95rem;
      }
    }
  `,
})
export class About {
  protected readonly profile = PROFILE;
}
