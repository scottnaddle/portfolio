import { c as createAstro, a as createComponent, d as addAttribute, f as renderHead, e as renderSlot, b as renderTemplate } from './astro/server_fjjE5Lvm.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                           */

const $$Astro = createAstro("https://your-domain.vercel.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Scott's AI & EdTech Portfolio" } = Astro2.props;
  return renderTemplate`<html lang="ko"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><title>${title} — Scott</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Noto+Serif+KR:wght@400;600&display=swap" rel="stylesheet">${renderHead()}</head> <body> <nav> <a href="/" class="nav-logo">Scott · 스콧</a> <ul class="nav-links"> <li><a href="/writing">Writing</a></li> <li><a href="/research">Research</a></li> <li><a href="/projects">Projects</a></li> <li><a href="/videos">Videos</a></li> <li><a href="/about">About</a></li> </ul> </nav> <main> ${renderSlot($$result, $$slots["default"])} </main> <footer> <span>© 2025 Scott · UBION</span> <span>EdTech · ODA · AI</span> </footer> </body></html>`;
}, "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
