import { Component, computed, signal } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.data';
import { ProjectCategory } from '../../data/portfolio.models';
import { Icon } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';

type Filter = 'Todos' | ProjectCategory;

@Component({
  selector: 'app-projects',
  imports: [Icon, RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  // Solo se muestran las categorías que tienen proyectos.
  protected readonly filters: Filter[] = [
    'Todos',
    ...(['Fullstack', 'Frontend', 'Backend', 'Móvil'] as const).filter((c) => PROJECTS.some((p) => p.category === c)),
  ];
  protected readonly selected = signal<Filter>('Todos');

  protected readonly visible = computed(() => {
    const filter = this.selected();
    const list = filter === 'Todos' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
    // Los destacados primero.
    return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  });

  protected count(filter: Filter): number {
    return filter === 'Todos' ? PROJECTS.length : PROJECTS.filter((p) => p.category === filter).length;
  }
}
