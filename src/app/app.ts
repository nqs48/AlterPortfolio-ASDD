import { Component, inject } from '@angular/core';
import { ThemeService } from './core/theme.service';
import { Footer } from './layout/footer/footer';
import { Navbar } from './layout/navbar/navbar';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Experience } from './sections/experience/experience';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-skills />
      <app-projects />
      <app-experience />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class App {
  // Se inyecta aquí para que el tema se aplique desde el arranque.
  private readonly theme = inject(ThemeService);
}
