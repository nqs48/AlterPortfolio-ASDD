# Portafolio — Desarrollador Fullstack

Portafolio personal hecho con Angular 21 (componentes standalone, signals y control flow `@if` / `@for`), sin librerías de UI.

## Requisitos

- Node.js 22.12 o superior (con nvm: `nvm use 22`)

## Comandos

```bash
npm install        # instala dependencias
npm start          # servidor de desarrollo en http://localhost:4200
npm run build      # build de producción en dist/portafolio/browser
```

> El archivo `.npmrc` activa `legacy-peer-deps` para evitar un error conocido de npm 10.9 (`Cannot read properties of null (reading 'edgesOut')`).

## Personalizar

| Qué cambiar | Dónde |
| --- | --- |
| Nombre, rol, bio, estadísticas, redes, correo, CV | `src/app/data/portfolio.data.ts` → `PROFILE` |
| Tecnologías por área | `src/app/data/portfolio.data.ts` → `SKILLS` |
| Proyectos (con filtro por categoría y destacados) | `src/app/data/portfolio.data.ts` → `PROJECTS` |
| Experiencia laboral | `src/app/data/portfolio.data.ts` → `EXPERIENCE` |
| Colores, tipografías, tema claro/oscuro | `src/styles.scss` (variables en `:root`) |
| Título y descripción para buscadores | `src/index.html` |
| Tu CV en PDF | Copia el archivo a `public/cv.pdf` y pon `cvUrl: 'cv.pdf'` |

## Estructura

```
src/app/
├── core/theme.service.ts      # tema claro/oscuro (se guarda en localStorage)
├── data/                      # tus datos y sus tipos
├── layout/                    # navbar (con sección activa y menú móvil) y footer
├── sections/                  # hero, about, skills, projects, experience, contact
└── shared/                    # iconos SVG y directiva de animación al hacer scroll
```

## Formulario de contacto

Sin backend, el formulario valida los campos y abre el cliente de correo con el mensaje listo. Para enviar desde el sitio, cambia el método `submit()` en `src/app/sections/contact/contact.ts` por una llamada a tu propia API o a un servicio como Formspree.
