# Estado del proyecto — Portfolio Alejandro Ruiz Castellano

_Última actualización: 2026-06-20_

## Resumen

Sitio en Astro v6 + Tailwind v4, desplegado en GitHub Pages vía GitHub Actions.
**Deploy funcionando correctamente**: https://alejandroruizcastellano.github.io

Repo: `alejandroruizcastellano/alejandroruizcastellano.github.io` (rama `main`, deploy automático en cada push).

## Estado actual

- Estructura completa: Header (nav con scroll-spy), Hero, About, TechStack/Skills, Projects (preview de 6 + página `/projects/` con todos), Contact, Footer.
- Workflow `.github/workflows/deploy.yml` corregido (Node 22 fijado para `withastro/action@v3`, ya que `package.json` exige `node >=22.12.0`).
- Página `/projects/` lista, con TODO ya colocado para un futuro filtro por skill/tecnología (v2, no implementar todavía).

## Completado (sesiones 2026-06-15 y 2026-06-16)

1. ✅ **Hero** — párrafo sustituido por "¡Bienvenid@ a mi portfolio!"; título "Ingeniero Técnico Industrial".
2. ✅ **Foto de perfil** — `public/images/profile.png` (200px, object-cover/object-top).
3. ✅ **Links de repos por proyecto** — cada `ProjectCard` enlaza a su repo real. Icono de GitHub en esquina superior derecha de la tarjeta.
4. ✅ **Ilustraciones SVG por proyecto** — header de tarjeta ampliado a 140px con visualización inline específica por proyecto: forecast + línea de predicción (Retail), scatter con clusters (Lead scoring), funnel Sessions→Cart→Purchase (CRO), curva de producción con anomalía (Fotovoltaica), scatter por distritos con regresión (Real estate).
5. ✅ **LinkedIn real** — `https://www.linkedin.com/in/alejandroruizc` en Hero, Contact y Footer.
6. ✅ **Email real** — Gmail Compose (`https://mail.google.com/mail/?view=cm&to=aleruizcastellano@gmail.com`) en Hero, Contact y Footer. Abre en pestaña nueva.

## Completado (sesión 2026-06-20)

7. ✅ **Proyecto People & HR Analytics** — nueva tarjeta con ilustración SVG tipo dashboard (KPI, barras, donut, línea, lista) e icono `dashboard`.
8. ✅ **Modales de detalle por proyecto** — icono de ojo junto al de GitHub en cada tarjeta. Click abre un modal con resumen ejecutivo (objetivo, enfoque, resultados clave, herramientas). Cierre con X, backdrop o Escape. Componente `ProjectModal.astro` + JS inline en `Projects.astro`.
9. ✅ **Resúmenes de los 6 proyectos** — contenido extraído de los READMEs de cada repositorio. Proyectos ML incluyen modelo utilizado.
10. ✅ **Sección "Próximos pasos"** en 3 proyectos (CRO e-commerce, Fotovoltaica, Real estate) — acciones orientadas a negocio, ceñidas al contenido del README.
11. ✅ **Iconos de tarjeta mejorados** — fondo blanco sólido con sombra, color slate, aspecto de botón clickable.

## Pendiente

### Listo para implementar en cuanto el usuario aporte el archivo/dato

- **CV en PDF** — el link ya existe en el Hero (`/documents/cv_alejandro_ruiz.pdf`) pero el archivo no está en `/public/documents/`. Pendiente de que el usuario suba el PDF.
- **Imagen OG** — `/public/images/og-preview.png` referenciada en `Layout.astro` pero no existe. Afecta al preview al compartir el link en redes (LinkedIn, WhatsApp, etc.). Pendiente de diseñar o generar.

### Fuera de alcance por ahora (acordado)

- Filtro por skill/tecnología en `/projects/` — marcado como v2, no implementar todavía.

## Notas de workflow

- El usuario revisa y aprueba cada paso antes de avanzar ("continúa"/"sí").
- Commits sin co-author de Claude (preferencia del usuario).
- El push a GitHub debe hacerse desde VS Code (Source Control / Sync Changes), ya que la terminal no tiene credenciales git configuradas (usa la auth de GitHub de VS Code).
- Para comprobar el estado del deploy: `curl -s "https://api.github.com/repos/alejandroruizcastellano/alejandroruizcastellano.github.io/actions/runs?per_page=3"`.
- **Importante**: antes de hacer commit/push, levantar `npm run dev` (http://localhost:4321/) para que el usuario vea cada cambio reflejado en local primero. Solo cuando lo apruebe, hacer commit y pedir el push para desplegar.
- **Importante**: el usuario quiere que cada cambio se despliegue y se verifique en el sitio en vivo antes de pasar a la siguiente tarea. Tras cada commit, esperar a que el usuario haga push desde VS Code y comprobar el deploy antes de continuar.
