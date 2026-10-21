import { Component } from '@angular/core';
import { CERTIFICATIONS, EDUCATION, EXPERIENCE } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [Icon, RevealDirective],
  template: `
    <section id="experiencia" class="section alt">
      <div class="container">
        <header class="section-header" appReveal>
          <span class="eyebrow">// experiencia</span>
          <h2 class="section-title">Trayectoria profesional</h2>
          <p class="section-subtitle">Equipos y proyectos en los que he crecido como desarrollador.</p>
        </header>

        <ol class="timeline">
          @for (job of experience; track job.company + job.period) {
            <li appReveal>
              <span class="period">{{ job.period }}</span>
              <div class="card entry">
                <h3>{{ job.role }}</h3>
                <p class="company">{{ job.company }}</p>
                <p class="description">{{ job.description }}</p>
                <ul class="achievements">
                  @for (item of job.achievements; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
                @if (job.stack?.length) {
                  <ul class="stack">
                    @for (tech of job.stack; track tech) {
                      <li class="tag">{{ tech }}</li>
                    }
                  </ul>
                }
              </div>
            </li>
          }
        </ol>

        <div class="extras">
          <div class="card extra" appReveal>
            <h3><app-icon name="graduation" [size]="20" /> Educación</h3>
            <ul>
              @for (item of education; track item.title) {
                <li>
                  <strong>{{ item.title }}</strong>
                  <span>{{ item.institution }} · {{ item.period }}</span>
                </li>
              }
            </ul>
          </div>
          <div class="card extra" appReveal [revealDelay]="100">
            <h3><app-icon name="award" [size]="20" /> Certificaciones</h3>
            <ul>
              @for (item of certifications; track item) {
                <li><strong>{{ item }}</strong></li>
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .alt {
      background: var(--bg-elevated);
      border-block: 1px solid var(--border);
    }

    .timeline {
      position: relative;
      margin: 0;
      padding: 0 0 0 32px;
      list-style: none;
      display: grid;
      gap: 32px;

      &::before {
        content: '';
        position: absolute;
        left: 7px;
        top: 6px;
        bottom: 6px;
        width: 2px;
        background: linear-gradient(var(--accent), var(--border));
      }

      > li {
        position: relative;

        &::before {
          content: '';
          position: absolute;
          left: -32px;
          top: 4px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--bg-elevated);
          border: 3px solid var(--accent);
        }
      }
    }

    .period {
      display: block;
      font-family: var(--font-mono);
      font-size: 0.85rem;
      color: var(--accent);
      margin-bottom: 10px;
    }

    .entry {
      padding: 24px 28px;
      box-shadow: none;

      h3 {
        font-size: 1.15rem;
      }
    }

    .achievements {
      display: grid;
      gap: 6px;
      margin-top: 14px;
      padding-left: 18px;
      list-style: disc;
      font-size: 0.93rem;

      li::marker {
        color: var(--accent);
      }
    }

    .stack {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 16px;
    }

    .company {
      color: var(--accent-2);
      font-weight: 600;
      font-size: 0.95rem;
      margin-top: 2px;
    }

    .description {
      margin-top: 10px;
      color: var(--text-muted);
    }

    .extras {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 56px;

      @media (max-width: 400px) {
        grid-template-columns: 1fr;
      }
    }

    .extra {
      padding: 24px 28px;
      box-shadow: none;

      h3 {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 1.1rem;
        color: var(--accent);
      }

      ul {
        display: grid;
        gap: 14px;
        margin-top: 18px;
      }

      li {
        display: grid;
        gap: 2px;
        font-size: 0.93rem;
      }

      strong {
        font-weight: 600;
      }

      span {
        color: var(--text-muted);
        font-size: 0.88rem;
      }
    }
  `,
})
export class Experience {
  protected readonly experience = EXPERIENCE;
  protected readonly education = EDUCATION;
  protected readonly certifications = CERTIFICATIONS;
}
