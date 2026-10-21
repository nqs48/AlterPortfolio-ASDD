import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { PROFILE } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';

interface NavLink {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  imports: [Icon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  host: {
    '[class.scrolled]': 'scrolled()',
    '(window:scroll)': 'onScroll()',
  },
})
export class Navbar {
  protected readonly theme = inject(ThemeService);
  protected readonly name = PROFILE.name;

  protected readonly links: NavLink[] = [
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'tecnologias', label: 'Tecnologías' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'contacto', label: 'Contacto' },
  ];

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly active = signal('');

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Resalta el enlace de la sección visible en pantalla.
    afterNextRender(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) this.active.set(entry.target.id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      for (const link of this.links) {
        const section = document.getElementById(link.id);
        if (section) observer.observe(section);
      }
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 10);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
