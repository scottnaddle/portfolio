import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_fjjE5Lvm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BOeBF4OE.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      name: "UBION AI Newsroom",
      nameKo: "AI \uB274\uC2A4\uB8F8",
      desc: "Ghost CMS \uAE30\uBC18 9-\uC5D0\uC774\uC804\uD2B8 \uC790\uB3D9 \uBC1C\uD589 \uC2DC\uC2A4\uD15C. ODA \uC785\uCC30 \uC815\uBCF4 \uC218\uC9D1, \uC694\uC57D, \uBC1C\uD589 \uC790\uB3D9\uD654.",
      tech: ["Ghost CMS", "OpenClaw", "Telegram", "Node.js"],
      category: "AI System",
      year: "2025",
      live: "https://insight.ubion.global",
      repo: null,
      highlight: true
    },
    {
      name: "OpenClaw Multi-Agent Pipeline",
      nameKo: "\uBA40\uD2F0\uC5D0\uC774\uC804\uD2B8 \uD30C\uC774\uD504\uB77C\uC778",
      desc: "Aria \uC624\uCF00\uC2A4\uD2B8\uB808\uC774\uD130 + 6\uAC1C \uC804\uBB38 \uC5D0\uC774\uC804\uD2B8 (Muse, Rex, Nova, Lena \uB4F1). agentToAgent \uD504\uB85C\uD1A0\uCF5C \uAE30\uBC18.",
      tech: ["OpenClaw", "Claude API", "Multi-Agent"],
      category: "AI Architecture",
      year: "2025",
      live: null,
      repo: null,
      highlight: false
    },
    {
      name: "ODA Bid Intelligence System",
      nameKo: "ODA \uC785\uCC30 \uC778\uD154\uB9AC\uC804\uC2A4",
      desc: "KOICA, NIPA, NIA \uACF5\uACE0 \uC790\uB3D9 \uC218\uC9D1 \uBC0F \uBD84\uC11D. \uAD00\uB828\uC131 \uC2A4\uCF54\uC5B4\uB9C1 \uD6C4 Telegram \uC54C\uB9BC.",
      tech: ["Python", "Scraping", "Telegram Bot", "Claude"],
      category: "Automation",
      year: "2025",
      live: null,
      repo: null,
      highlight: false
    },
    {
      name: "TVET Career Platform (Sri Lanka)",
      nameKo: "TVET \uCEE4\uB9AC\uC5B4 \uD50C\uB7AB\uD3FC",
      desc: "KOICA ODA \uD504\uB85C\uC81D\uD2B8. \uC2A4\uB9AC\uB791\uCE74 \uC9C1\uC5C5\uAD50\uC721 \uAE30\uAD00\uC744 \uC704\uD55C \uB514\uC9C0\uD138 \uCEE4\uB9AC\uC5B4 \uAD00\uB9AC \uC2DC\uC2A4\uD15C.",
      tech: ["Moodle", "LMS", "KOICA", "ODA"],
      category: "EdTech Platform",
      year: "2023\u20132025",
      live: null,
      repo: null,
      highlight: false
    },
    {
      name: "Meeting Minutes Agent",
      nameKo: "\uD68C\uC758\uB85D \uC790\uB3D9\uD654 \uC5D0\uC774\uC804\uD2B8",
      desc: "Claude Code + MCP + Whisper API\uB85C ODA \uD504\uB85C\uC81D\uD2B8 \uD68C\uC758 \uC790\uB3D9 \uC804\uC0AC \uBC0F \uC694\uC57D \uC0DD\uC131.",
      tech: ["Claude Code", "MCP", "Whisper API", "Obsidian"],
      category: "Productivity",
      year: "2025",
      live: null,
      repo: null,
      highlight: false
    },
    {
      name: "NotebookLM REST Wrapper",
      nameKo: "NotebookLM \uD1B5\uD569",
      desc: "NotebookLM\uC744 OpenClaw \uD30C\uC774\uD504\uB77C\uC778\uC5D0 \uC5F0\uB3D9\uD558\uB294 REST API \uB798\uD37C. \uB274\uC2A4\uB8F8 \uB9AC\uC11C\uCE58 \uC790\uB3D9\uD654.",
      tech: ["REST API", "NotebookLM", "OpenClaw"],
      category: "Integration",
      year: "2025",
      live: null,
      repo: null,
      highlight: false
    }
  ];
  ["All", ...new Set(projects.map((p) => p.category))];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects", "data-astro-cid-aid3sr62": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<header class="page-header" data-astro-cid-aid3sr62> <h1 class="page-title" data-astro-cid-aid3sr62>
Projects &<br data-astro-cid-aid3sr62> <em data-astro-cid-aid3sr62>Systems</em> </h1> <p class="page-intro" data-astro-cid-aid3sr62>
AI 에이전트, ODA EdTech 플랫폼, 자동화 시스템.<br data-astro-cid-aid3sr62>
현장에서 직접 만들고 운영한 것들.
</p> </header> <div class="projects-grid" data-astro-cid-aid3sr62> ${projects.map((p) => renderTemplate`<div${addAttribute(`project-card ${p.highlight ? "highlight" : ""}`, "class")} data-astro-cid-aid3sr62> <span class="proj-category" data-astro-cid-aid3sr62>${p.category}</span> <h2 class="proj-name" data-astro-cid-aid3sr62>${p.name}</h2> <span class="proj-name-ko" data-astro-cid-aid3sr62>${p.nameKo}</span> <p class="proj-desc" data-astro-cid-aid3sr62>${p.desc}</p> <div class="proj-tech" data-astro-cid-aid3sr62> ${p.tech.map((t) => renderTemplate`<span class="tag" data-astro-cid-aid3sr62>${t}</span>`)} </div> <div class="proj-footer" data-astro-cid-aid3sr62> <span class="proj-year" data-astro-cid-aid3sr62>${p.year}</span> <div class="proj-links" data-astro-cid-aid3sr62> ${p.live && renderTemplate`<a${addAttribute(p.live, "href")} class="proj-link" target="_blank" data-astro-cid-aid3sr62>Live ↗</a>`} ${p.repo && renderTemplate`<a${addAttribute(p.repo, "href")} class="proj-link" target="_blank" data-astro-cid-aid3sr62>GitHub ↗</a>`} </div> </div> </div>`)} </div> ` })}`;
}, "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/projects.astro", void 0);

const $$file = "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
