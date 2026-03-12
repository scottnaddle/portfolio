import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_fjjE5Lvm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BOeBF4OE.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Writing = createComponent(($$result, $$props, $$slots) => {
  const writings = [
    {
      title: "\uC5F0\uACB0\uB41C \uBC30\uC6C0 \u2014 \uAE30\uC220\uC774 \uAD50\uC721\uC744 \uB2E4\uC2DC \uC4F4 150\uB144\uC758 \uC774\uC57C\uAE30",
      titleEn: "Connected Learning",
      type: "\uCC45 \xB7 Book",
      date: "2024\u20132025",
      chapters: 12,
      desc: "\uC6B0\uD3B8 \uD1B5\uC2E0 \uAD50\uC721\uBD80\uD130 AI \uC5D0\uC774\uC804\uD2B8\uAE4C\uC9C0, \uAD50\uC721 \uAE30\uC220\uC758 \uC5ED\uC0AC\uB97C \uD1B5\uD574 \uD559\uC2B5\uC758 \uBCF8\uC9C8\uC744 \uD0D0\uAD6C\uD569\uB2C8\uB2E4.",
      tags: ["EdTech", "AI", "Education History"],
      status: "\uC9D1\uD544 \uC911",
      href: "#"
    },
    {
      title: "AI Agent \uD601\uBA85 \u2014 \uD604\uC7A5 \uBCF4\uACE0\uC11C",
      titleEn: "AI Agent Revolution: A Field Report",
      type: "\uBC1C\uD45C\uBB38 \xB7 Presentation",
      date: "2026",
      desc: "\uD14C\uD06C\uB370\uC774 2026 \uBC1C\uD45C. AI \uC5D0\uC774\uC804\uD2B8\uB97C \uC9C1\uC811 \uC124\uACC4\uD558\uACE0 \uC6B4\uC601\uD55C \uACBD\uD5D8\uC5D0\uC11C \uB098\uC628 \uD604\uC7A5 \uBCF4\uACE0\uC11C.",
      tags: ["AI Agent", "Automation", "Future of Work"],
      status: "\uC644\uB8CC",
      href: "/writing/ai-agent-revolution"
    },
    {
      title: "AI \uC288\uD37C\uC704\uD06C \uC774\uD6C4 \u2014 \uC9C0\uC2DD \uB178\uB3D9\uC758 \uBBF8\uB798\uC5D0 \uB300\uD55C \uBE0C\uB9AC\uD551",
      titleEn: "After AI Super Week: The Future of Knowledge Work",
      type: "\uBC1C\uD45C\uBB38 \xB7 Presentation",
      date: "2025",
      desc: "2025\uB144 AI \uC288\uD37C\uC704\uD06C \uC774\uD6C4 \uC9C0\uC2DD \uB178\uB3D9\uC758 \uC9C0\uD615 \uBCC0\uD654\uB97C \uBD84\uC11D\uD55C \uBE0C\uB9AC\uD551. \uC131\uACF5\uD68C\uB300 AIED \uC6CC\uD06C\uC0F5.",
      tags: ["AI", "Future of Work", "Knowledge Work"],
      status: "\uC644\uB8CC",
      href: "/writing/ai-superweek"
    },
    {
      title: "AI\uB294 \uD68C\uC0AC\uB97C \uC5B4\uB5BB\uAC8C \uBC14\uAFC0\uAE4C?",
      titleEn: "How AI Transforms Organizations",
      type: "\uC5D0\uC138\uC774 \xB7 Essay",
      date: "2025",
      desc: "AI \uB3C4\uC785\uC774 \uC870\uC9C1 \uAD6C\uC870\uC640 \uC5C5\uBB34 \uBC29\uC2DD\uC5D0 \uBBF8\uCE58\uB294 \uC2E4\uC9C8\uC801 \uC601\uD5A5. \uAC1C\uC778\xB7\uD300\xB7\uC804\uB7B5 \uC138 \uB808\uC774\uC5B4\uB85C \uBD84\uC11D\uD55C\uB2E4.",
      tags: ["AI", "Organization", "Future of Work"],
      status: "\uC644\uB8CC",
      href: "/writing/ai-company-change"
    },
    {
      title: "AX \uC778\uC7AC\uC0C1 \uC7AC\uC815\uC758\uC640 \uD601\uC2E0 \uC804\uB7B5",
      titleEn: "Redefining AX Talent and Innovation Strategy",
      type: "\uBC1C\uD45C\uBB38 \xB7 Presentation",
      date: "2025",
      desc: "AI \uC804\uD658 \uC2DC\uB300\uC758 \uC0C8\uB85C\uC6B4 \uC778\uC7AC\uC0C1\uACFC \uC870\uC9C1 \uD601\uC2E0 \uC804\uB7B5. \uAE30\uC220 \uC5ED\uB7C9\uC744 \uB118\uC5B4 \uC0AC\uACE0 \uBC29\uC2DD\uC73C\uB85C \uC778\uC7AC\uB97C \uC815\uC758\uD55C\uB2E4.",
      tags: ["AX", "Talent", "Innovation"],
      status: "\uC644\uB8CC",
      href: "/writing/ax-talent"
    },
    {
      title: "AI \uC2DC\uB300, \uB300\uD559 \uAD50\uC721\uC758 \uD328\uB7EC\uB2E4\uC784 \uC804\uD658\uC744 \uC704\uD55C \uC81C\uC5B8",
      titleEn: "Paradigm Shift in University Education in the AI Era",
      type: "\uBC1C\uD45C\uBB38 \xB7 Presentation",
      date: "2025",
      desc: "AI\uAC00 \uB300\uD559 \uAD50\uC721\uC758 \uD3C9\uAC00\xB7\uAD50\uC218\uBC95\xB7\uCEE4\uB9AC\uD058\uB7FC\uC744 \uC5B4\uB5BB\uAC8C \uC7AC\uC124\uACC4\uD574\uC57C \uD558\uB294\uC9C0\uC5D0 \uB300\uD55C \uC815\uCC45 \uC81C\uC5B8.",
      tags: ["Higher Education", "AI", "Policy"],
      status: "\uC644\uB8CC",
      href: "/writing/university-education-ai"
    },
    {
      title: "AX \uC2DC\uB300, \uAD50\uC721\uC758 \uB450 \uAC00\uC9C0 \uAE38",
      titleEn: "Two Paths of Education in the AI Era",
      type: "\uBC1C\uD45C\uBB38 \xB7 Presentation",
      date: "2025",
      desc: "\uAD6D\uD68C \uC6CC\uD06C\uC20D \uBC1C\uD45C. \uD55C\uAD6D EdTech\uB97C \uC804\uB7B5\uC801 \uC218\uCD9C \uC0B0\uC5C5\uC73C\uB85C \uC7AC\uC815\uC758\uD558\uB294 \uC815\uCC45 \uC81C\uC5B8.",
      tags: ["Policy", "Korea EdTech", "AI Strategy"],
      status: "\uC644\uB8CC",
      href: "#"
    },
    {
      title: "Agentic Learning Fabric",
      titleEn: "Agentic Learning Fabric: Next-Gen Learning Infrastructure",
      type: "\uC5D0\uC138\uC774 \xB7 Essay",
      date: "2025",
      desc: "AI \uC5D0\uC774\uC804\uD2B8 \uAE30\uBC18\uC758 \uCC28\uC138\uB300 \uD559\uC2B5 \uC778\uD504\uB77C \uAC1C\uB150. \uD559\uC2B5\uC790\xB7\uCF58\uD150\uCE20\xB7\uD3C9\uAC00\uAC00 \uC5D0\uC774\uC804\uD2B8\uB85C \uC5F0\uACB0\uB418\uB294 \uC0C8\uB85C\uC6B4 \uAD6C\uC870.",
      tags: ["AI Agent", "Learning Design", "EdTech"],
      status: "\uC791\uC131 \uC911",
      href: "/writing/agentic-learning-fabric"
    },
    {
      title: "AI \uBBFC\uC8FC\uD654\uC640 \uAD50\uC721 \uC870\uC9C1\uC758 \uC804\uD658",
      titleEn: "AI Democratization in Educational Organizations",
      type: "\uC5D0\uC138\uC774 \xB7 Essay",
      date: "2025",
      desc: "\uB178\uCF54\uB4DC AI \uD50C\uB7AB\uD3FC\uC774 \uC5B4\uB5BB\uAC8C \uAD50\uC721 \uAE30\uAD00\uC758 \uB514\uC9C0\uD138 \uC804\uD658\uC744 \uAC00\uC18D\uD654\uD558\uB294\uAC00.",
      tags: ["AI", "No-Code", "Digital Transformation"],
      status: "\uC644\uB8CC",
      href: "#"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Writing", "data-astro-cid-fiz4ill5": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<header class="page-header" data-astro-cid-fiz4ill5> <h1 class="page-title" data-astro-cid-fiz4ill5>
Writing &<br data-astro-cid-fiz4ill5> <em data-astro-cid-fiz4ill5>Ideas</em> </h1> <p class="page-intro" data-astro-cid-fiz4ill5>
교육 기술, AI 전환, ODA 프로젝트 현장에서 쓴 글들.<br data-astro-cid-fiz4ill5>
책, 에세이, 발표문, 정책 제언까지.
</p> </header> <div class="writing-list" data-astro-cid-fiz4ill5> ${writings.map((w) => renderTemplate`<article class="writing-item" data-astro-cid-fiz4ill5> <div class="writing-meta" data-astro-cid-fiz4ill5> <span class="writing-date" data-astro-cid-fiz4ill5>${w.date}</span> <span class="writing-type" data-astro-cid-fiz4ill5>${w.type}</span> </div> <div class="writing-body" data-astro-cid-fiz4ill5> <h2 data-astro-cid-fiz4ill5><a${addAttribute(w.href, "href")} data-astro-cid-fiz4ill5>${w.title}</a></h2> <p class="writing-en" data-astro-cid-fiz4ill5>${w.titleEn}</p> <p class="writing-desc" data-astro-cid-fiz4ill5>${w.desc}</p> <div class="writing-tags" data-astro-cid-fiz4ill5> ${w.tags.map((tag) => renderTemplate`<span class="tag" data-astro-cid-fiz4ill5>${tag}</span>`)} </div> </div> <div class="writing-status" data-astro-cid-fiz4ill5> <span${addAttribute(`status-badge ${w.status === "\uC644\uB8CC" ? "done" : ""}`, "class")} data-astro-cid-fiz4ill5>${w.status}</span> ${w.chapters && renderTemplate`<span class="chapters-badge" data-astro-cid-fiz4ill5>${w.chapters} chapters</span>`} </div> </article>`)} </div> ` })}`;
}, "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/writing.astro", void 0);

const $$file = "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/writing.astro";
const $$url = "/writing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Writing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
