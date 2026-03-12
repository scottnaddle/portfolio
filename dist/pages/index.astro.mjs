import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_fjjE5Lvm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BOeBF4OE.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const featuredItems = [
    {
      type: "Writing",
      typeKo: "\uAE00",
      title: "\uC5F0\uACB0\uB41C \uBC30\uC6C0",
      subtitle: "\uAE30\uC220\uC774 \uAD50\uC721\uC744 \uB2E4\uC2DC \uC4F4 150\uB144\uC758 \uC774\uC57C\uAE30",
      desc: "\uAD50\uC721 \uAE30\uC220\uC758 \uC5ED\uC0AC\uB97C \uD1B5\uD574 AI \uC2DC\uB300\uC758 \uD559\uC2B5\uC744 \uC7AC\uC815\uC758\uD558\uB294 12\uCC55\uD130 \uC2DC\uB9AC\uC988.",
      href: "/writing",
      accent: true
    },
    {
      type: "Project",
      typeKo: "\uD504\uB85C\uC81D\uD2B8",
      title: "UBION AI Newsroom",
      subtitle: "insight.ubion.global",
      desc: "Ghost CMS \uAE30\uBC18 9-\uC5D0\uC774\uC804\uD2B8 \uB274\uC2A4\uB8F8 \uD30C\uC774\uD504\uB77C\uC778. ODA \uC785\uCC30 \uC815\uBCF4 \uC790\uB3D9 \uC218\uC9D1\xB7\uBC1C\uD589.",
      href: "https://insight.ubion.global",
      accent: false
    },
    {
      type: "Project",
      typeKo: "\uD504\uB85C\uC81D\uD2B8",
      title: "OpenClaw Multi-Agent System",
      subtitle: "AI Democratization for EdTech",
      desc: "\uBE44\uAC1C\uBC1C\uC790\uB97C \uC704\uD55C \uB178\uCF54\uB4DC AI \uC5D0\uC774\uC804\uD2B8 \uC624\uCF00\uC2A4\uD2B8\uB808\uC774\uC158. UBION AI \uC804\uD658 \uC13C\uD130.",
      href: "/projects",
      accent: false
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-grid" data-astro-cid-j7pv25f6></div> <section class="hero" data-astro-cid-j7pv25f6> <div class="hero-left" data-astro-cid-j7pv25f6> <p class="hero-eyebrow" data-astro-cid-j7pv25f6>VP, UBION · AI Transformation · ODA EdTech</p> <h1 class="hero-title" data-astro-cid-j7pv25f6>
Building the<br data-astro-cid-j7pv25f6> <em data-astro-cid-j7pv25f6>Future</em> of<br data-astro-cid-j7pv25f6>
Learning
</h1> <p class="hero-sub" data-astro-cid-j7pv25f6>
교육 기술 20년 경력. AI 에이전트, ODA 프로젝트,<br data-astro-cid-j7pv25f6>
그리고 학습의 미래를 기록합니다.
</p> <div class="hero-cta" data-astro-cid-j7pv25f6> <a href="/about" class="btn-primary" data-astro-cid-j7pv25f6>About Me</a> <a href="/projects" class="btn-ghost" data-astro-cid-j7pv25f6>프로젝트 보기 →</a> </div> </div> <div class="hero-right" data-astro-cid-j7pv25f6> <div class="hero-stat-grid" data-astro-cid-j7pv25f6> <div class="hero-stat" data-astro-cid-j7pv25f6> <div class="hero-stat-num" data-astro-cid-j7pv25f6>20+</div> <div class="hero-stat-label" data-astro-cid-j7pv25f6>Years in EdTech</div> </div> <div class="hero-stat" data-astro-cid-j7pv25f6> <div class="hero-stat-num" data-astro-cid-j7pv25f6>7</div> <div class="hero-stat-label" data-astro-cid-j7pv25f6>Countries · ODA</div> </div> <div class="hero-stat" data-astro-cid-j7pv25f6> <div class="hero-stat-num" data-astro-cid-j7pv25f6>12</div> <div class="hero-stat-label" data-astro-cid-j7pv25f6>Book Chapters</div> </div> <div class="hero-stat" data-astro-cid-j7pv25f6> <div class="hero-stat-num" data-astro-cid-j7pv25f6>9</div> <div class="hero-stat-label" data-astro-cid-j7pv25f6>AI Agents Built</div> </div> </div> <p class="hero-desc" data-astro-cid-j7pv25f6>
Kazakhstan · Vietnam · Cambodia · Sri Lanka · Uzbekistan.<br data-astro-cid-j7pv25f6>
KOICA · ADB · UNESCO 프로젝트 리드.<br data-astro-cid-j7pv25f6>
AI 전환 센터 구축 중.
</p> </div> </section> <div class="ticker" data-astro-cid-j7pv25f6> <div class="ticker-inner" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>EdTech</span><span class="dot" data-astro-cid-j7pv25f6>◆</span> <span data-astro-cid-j7pv25f6>ODA Projects</span><span class="dot" data-astro-cid-j7pv25f6>◆</span> <span data-astro-cid-j7pv25f6>AI Agents</span><span class="dot" data-astro-cid-j7pv25f6>◆</span> <span data-astro-cid-j7pv25f6>Ghost CMS</span><span class="dot" data-astro-cid-j7pv25f6>◆</span> <span data-astro-cid-j7pv25f6>연결된 배움</span><span class="dot" data-astro-cid-j7pv25f6>◆</span> <span data-astro-cid-j7pv25f6>KOICA · ADB · UNESCO</span><span class="dot" data-astro-cid-j7pv25f6>◆</span> <span data-astro-cid-j7pv25f6>LMS · LXP · TVET</span><span class="dot" data-astro-cid-j7pv25f6>◆</span> <span data-astro-cid-j7pv25f6>OpenClaw · Claude</span><span class="dot" data-astro-cid-j7pv25f6>◆</span> <span data-astro-cid-j7pv25f6>EdTech</span><span class="dot" data-astro-cid-j7pv25f6>◆</span> <span data-astro-cid-j7pv25f6>ODA Projects</span><span class="dot" data-astro-cid-j7pv25f6>◆</span> <span data-astro-cid-j7pv25f6>AI Agents</span><span class="dot" data-astro-cid-j7pv25f6>◆</span> <span data-astro-cid-j7pv25f6>Ghost CMS</span><span class="dot" data-astro-cid-j7pv25f6>◆</span> <span data-astro-cid-j7pv25f6>연결된 배움</span><span class="dot" data-astro-cid-j7pv25f6>◆</span> <span data-astro-cid-j7pv25f6>KOICA · ADB · UNESCO</span><span class="dot" data-astro-cid-j7pv25f6>◆</span> <span data-astro-cid-j7pv25f6>LMS · LXP · TVET</span><span class="dot" data-astro-cid-j7pv25f6>◆</span> <span data-astro-cid-j7pv25f6>OpenClaw · Claude</span><span class="dot" data-astro-cid-j7pv25f6>◆</span> </div> </div> <section class="section" data-astro-cid-j7pv25f6> <div class="section-header" data-astro-cid-j7pv25f6> <h2 class="section-title" data-astro-cid-j7pv25f6>Featured Work</h2> <a href="/projects" class="section-link" data-astro-cid-j7pv25f6>All Projects →</a> </div> <div class="featured-grid" data-astro-cid-j7pv25f6> ${featuredItems.map((item, i) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`featured-card ${i === 0 ? "large" : ""}`, "class")} data-astro-cid-j7pv25f6> <span class="card-type" data-astro-cid-j7pv25f6>${item.type} · ${item.typeKo}</span> <h3 class="card-title" data-astro-cid-j7pv25f6>${item.title}</h3> <span class="card-subtitle" data-astro-cid-j7pv25f6>${item.subtitle}</span> <p class="card-desc" data-astro-cid-j7pv25f6>${item.desc}</p> <span class="card-arrow" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>View</span> <span data-astro-cid-j7pv25f6>→</span> </span> </a>`)} </div> </section> ` })}`;
}, "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/index.astro", void 0);

const $$file = "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
