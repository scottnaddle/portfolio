import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as renderSlot } from './astro/server_fjjE5Lvm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_BOeBF4OE.mjs';
/* empty css                                           */

const $$Astro = createAstro("https://your-domain.vercel.app");
const $$ArticleLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleLayout;
  const { title, titleEn, type, date, tags = [], description, venue } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-zm77yjld": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="article-back" data-astro-cid-zm77yjld> <a href="/writing" class="back-link" data-astro-cid-zm77yjld>← Writing & Ideas</a> </div> <header class="article-header" data-astro-cid-zm77yjld> <div class="article-meta-row" data-astro-cid-zm77yjld> <span class="article-type" data-astro-cid-zm77yjld>${type}</span> <span class="article-date" data-astro-cid-zm77yjld>${date}</span> ${venue && renderTemplate`<span class="article-venue" data-astro-cid-zm77yjld>${venue}</span>`} </div> <h1 class="article-title" data-astro-cid-zm77yjld>${title}</h1> ${titleEn && renderTemplate`<p class="article-title-en" data-astro-cid-zm77yjld>${titleEn}</p>`} ${description && renderTemplate`<p class="article-desc" data-astro-cid-zm77yjld>${description}</p>`} <div class="article-tags" data-astro-cid-zm77yjld> ${tags.map((tag) => renderTemplate`<span class="tag" data-astro-cid-zm77yjld>${tag}</span>`)} </div> </header> <div class="article-body" data-astro-cid-zm77yjld> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/layouts/ArticleLayout.astro", void 0);

export { $$ArticleLayout as $ };
