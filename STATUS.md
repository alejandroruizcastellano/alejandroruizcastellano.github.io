# Estado del proyecto — Portfolio Alejandro Ruiz Castellano

_Última actualización: 2026-06-14_

## Resumen

Sitio en Astro v6 + Tailwind v4, desplegado en GitHub Pages vía GitHub Actions.
**Deploy funcionando correctamente**: https://alejandroruizcastellano.github.io

Repo: `alejandroruizcastellano/alejandroruizcastellano.github.io` (rama `main`, deploy automático en cada push).

## Estado actual

- Estructura completa: Header (nav con scroll-spy), Hero, About, TechStack/Skills, Projects (preview de 6 + página `/projects/` con todos), Contact, Footer.
- Workflow `.github/workflows/deploy.yml` corregido (Node 22 fijado para `withastro/action@v3`, ya que `package.json` exige `node >=22.12.0`).
- Página `/projects/` lista, con TODO ya colocado para un futuro filtro por skill/tecnología (v1, no implementar todavía).

## Pendiente (Fase 7 — contenido final, según lo acordado)

Tareas ya identificadas previamente, sin resolver aún:
- ~~4 proyectos con link a GitHub aún apuntan al perfil genérico (placeholder) en lugar de su repo específico.~~ ✅ Hecho 2026-06-15 (ver tarea 3 de abajo).
- LinkedIn real (actualmente `'#'` en Hero, Contact, Footer).
- Email real (actualmente `mailto:#` en Contact y Footer).
- CV en PDF: falta el archivo en `/public/documents/` (referenciado pero no existe).
- Imagen OG (`/public/images/og-preview.png`) referenciada en `Layout.astro` pero no existe.

## Nuevas tareas para la próxima sesión (pedidas por el usuario el 2026-06-14)

1. ~~**Modificar el encabezado (Hero)**: ajustar el contenido/diseño debajo del nombre.~~ ✅ Hecho y desplegado 2026-06-15: párrafo sustituido por "¡Bienvenid@ a mi portfolio!"; título "Ingeniero Técnico Industrial".
2. ~~**Foto de perfil**: sustituir el círculo placeholder "AR" por la foto real del usuario.~~ ✅ Hecho y desplegado 2026-06-15: `public/images/profile.png` (foto3.png, 200px, object-cover/object-top).
3. ~~**Links de repos por proyecto**: enlazar cada proyecto de `src/data/projects.ts` a su repo de GitHub correspondiente.~~ ✅ Hecho 2026-06-15: Forecasting-Retail---ML, Lead-Scoring-ML, Optimizacion-ecommerce, Analisis-mercado-inmobiliario.
4. **Segunda opción de visualización por proyecto**: además del link a GitHub, añadir una vista con un resumen/conclusiones del proyecto (tipo presentación). Pendiente decidir el formato (modal, página individual por proyecto, sección expandible, etc.).
5. **Imagen representativa por proyecto**: en `ProjectCard.astro`, sustituir el icono SVG del header por una imagen representativa del proyecto (actualmente usa iconos por categoría: chart-line, users, sun, cart, building).

## Notas de workflow

- El usuario revisa y aprueba cada paso antes de avanzar ("continúa"/"sí").
- Commits con `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`.
- El push a GitHub debe hacerse desde VS Code (Source Control / Sync Changes), ya que la terminal no tiene credenciales git configuradas (usa la auth de GitHub de VS Code).
- Para comprobar el estado del deploy: `curl -s "https://api.github.com/repos/alejandroruizcastellano/alejandroruizcastellano.github.io/actions/runs?per_page=3"`.
- **Importante**: el usuario quiere que cada cambio se despliegue y se verifique en el sitio en vivo antes de pasar a la siguiente tarea (acordado 2026-06-15). Tras cada commit, esperar a que el usuario haga push desde VS Code, y comprobar el deploy con el comando de arriba antes de continuar.
