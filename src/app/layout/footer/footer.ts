import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  template: `
    <div class="container footer">
      <p>© {{ year }} {{ profile.name }}. Hecho con Angular.</p>
      <ul class="socials">
        @for (social of profile.socials; track social.label) {
          <li>
            <a [href]="social.url" target="_blank" rel="noopener" [attr.aria-label]="social.label">
              <app-icon [name]="social.icon" [size]="18" />
            </a>
          </li>
        }
      </ul>
    </div>
  `,
  styles: `
    :host {
      display: block;
      border-top: 1px solid var(--border);
      padding: 28px 0;
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    .footer {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .socials {
      display: flex;
      gap: 16px;

      a:hover {
        color: var(--accent);
      }
    }
  `,
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}
