import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_fjjE5Lvm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BOeBF4OE.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Research = createComponent(($$result, $$props, $$slots) => {
  const digests = [
    {
      week: "2026-W08",
      date: "2026\uB144 2\uC6D4 3\uC8FC",
      count: 12,
      sources: ["arXiv", "EdSurge", "Frontiers", "OECD"],
      topics: ["LLM in Education", "AI Safety", "K-12 EdTech", "Adaptive Learning"],
      highlight: "AI \uC5D0\uC774\uC804\uD2B8 \uAE30\uBC18 \uAD50\uC721 \uB3C4\uAD6C\uC758 \uC2E4\uC99D \uC5F0\uAD6C\uAC00 \uBCF8\uACA9\uD654\uB418\uB294 \uD750\uB984. AAAI 2026 AI4EDU \uC6CC\uD06C\uC0F5 \uB17C\uBB38 \uB2E4\uC218 \uC218\uB85D.",
      href: "#",
      status: "published"
    }
  ];
  const topicAreas = [
    {
      slug: "llm-in-education",
      label: "LLM in Education",
      desc: "\uB300\uD615 \uC5B8\uC5B4 \uBAA8\uB378\uC758 \uAD50\uC721\uC801 \uD65C\uC6A9 \uC5F0\uAD6C \uC544\uCE74\uC774\uBE0C",
      count: "\uC9C4\uD589 \uC911"
    },
    {
      slug: "adaptive-learning",
      label: "Adaptive Learning",
      desc: "\uAC1C\uC778\uD654 \uD559\uC2B5 \uBC0F \uC801\uC751\uD615 \uC2DC\uC2A4\uD15C \uC5F0\uAD6C",
      count: "\uC9C4\uD589 \uC911"
    },
    {
      slug: "tvet-ai",
      label: "TVET & AI",
      desc: "\uC9C1\uC5C5\uAE30\uC220\uAD50\uC721(TVET)\uACFC AI \uC811\uBAA9 \uC5F0\uAD6C",
      count: "\uC9C4\uD589 \uC911"
    },
    {
      slug: "oda-edtech",
      label: "ODA & EdTech",
      desc: "\uAC1C\uBC1C\uD611\uB825(ODA) \uB9E5\uB77D\uC758 EdTech \uC5F0\uAD6C \uBC0F \uC0AC\uB840",
      count: "\uC9C4\uD589 \uC911"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Research", "description": "AI \uAD50\uC721 \uBD84\uC57C \uC5F0\uAD6C \uC544\uCE74\uC774\uBE0C \u2014 \uB9E4\uC8FC \uC5C5\uB370\uC774\uD2B8\uB418\uB294 \uB17C\uBB38\xB7\uAE30\uC0AC\xB7\uC778\uC0AC\uC774\uD2B8 \uBAA8\uC74C", "data-astro-cid-odi5jzfj": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<header class="page-header" data-astro-cid-odi5jzfj> <h1 class="page-title" data-astro-cid-odi5jzfj>
Research<br data-astro-cid-odi5jzfj> <em data-astro-cid-odi5jzfj>Archive</em> </h1> <p class="page-intro" data-astro-cid-odi5jzfj>
AI 교육 분야의 논문·기사·인사이트를 매주 아카이빙합니다.<br data-astro-cid-odi5jzfj>
arXiv, EdSurge, Frontiers, OECD 등 주요 소스를 추적하며<br data-astro-cid-odi5jzfj>
실천 가능한 인사이트를 정리합니다.
</p> </header>  <p class="section-label" data-astro-cid-odi5jzfj>Weekly Digest</p> <div class="digest-list" data-astro-cid-odi5jzfj> ${digests.map((d) => renderTemplate`<article class="digest-item" data-astro-cid-odi5jzfj> <div class="digest-meta" data-astro-cid-odi5jzfj> <span class="digest-week" data-astro-cid-odi5jzfj>${d.week}</span> <span class="digest-date" data-astro-cid-odi5jzfj>${d.date}</span> <span class="digest-count" data-astro-cid-odi5jzfj>${d.count} articles</span> </div> <div class="digest-body" data-astro-cid-odi5jzfj> <h3 data-astro-cid-odi5jzfj><a${addAttribute(d.href, "href")} data-astro-cid-odi5jzfj>${d.week} — AI Education Digest</a></h3> <p class="digest-highlight" data-astro-cid-odi5jzfj>${d.highlight}</p> <div class="digest-sources" data-astro-cid-odi5jzfj> ${d.sources.map((s) => renderTemplate`<span class="source-badge" data-astro-cid-odi5jzfj>${s}</span>`)} </div> <div class="digest-topics" data-astro-cid-odi5jzfj> ${d.topics.map((t) => renderTemplate`<span class="tag" data-astro-cid-odi5jzfj>${t}</span>`)} </div> </div> <div data-astro-cid-odi5jzfj> <span class="tag accent" data-astro-cid-odi5jzfj>Latest</span> </div> </article>`)} </div>  <p class="section-label" style="margin-top: 3rem;" data-astro-cid-odi5jzfj>Research Topics</p> <div class="topic-grid" data-astro-cid-odi5jzfj> ${topicAreas.map((t) => renderTemplate`<div class="topic-card" data-astro-cid-odi5jzfj> <p class="topic-label" data-astro-cid-odi5jzfj>${t.label}</p> <p class="topic-desc" data-astro-cid-odi5jzfj>${t.desc}</p> <span class="topic-count" data-astro-cid-odi5jzfj>${t.count}</span> </div>`)} </div> <div class="coming-soon" data-astro-cid-odi5jzfj> <p class="coming-soon-text" data-astro-cid-odi5jzfj>더 많은 다이제스트가 업로드될 예정입니다 — updated weekly</p> </div> ` })}`;
}, "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/research.astro", void 0);

const $$file = "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/research.astro";
const $$url = "/research";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Research,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
