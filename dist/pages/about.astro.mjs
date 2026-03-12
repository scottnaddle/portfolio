import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_fjjE5Lvm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BOeBF4OE.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://your-domain.vercel.app");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const timeline = [
    { year: "2025", event: "UBION AI Transformation Center \uAD6C\uCD95. 9-\uC5D0\uC774\uC804\uD2B8 \uB274\uC2A4\uB8F8 \uB7F0\uCE6D.", en: "AI Newsroom Launch" },
    { year: "2024", event: "\uC5F0\uACB0\uB41C \uBC30\uC6C0 \uC9D1\uD544 \uC2DC\uC791. \uAD6D\uD68C \uC6CC\uD06C\uC20D EdTech \uC815\uCC45 \uBC1C\uD45C.", en: "Book Writing & Policy Presentation" },
    { year: "2023", event: "KOICA \uC2A4\uB9AC\uB791\uCE74 TVET Career Platform \uD504\uB85C\uC81D\uD2B8 \uB9AC\uB4DC.", en: "Sri Lanka TVET Platform" },
    { year: "2022", event: "ADB \uCE84\uBCF4\uB514\uC544, UNESCO \uCE74\uC790\uD750\uC2A4\uD0C4 KSP \uD504\uB85C\uC81D\uD2B8.", en: "Cambodia & Kazakhstan ODA" },
    { year: "2018", event: "VIDEA EdTech \uBCA0\uD2B8\uB0A8 \uBC95\uC778 \uC124\uB9BD. (\uD604\uC7AC 7\uC8FC\uB144)", en: "VIDEA Vietnam Office" },
    { year: "2005", event: "UBION \uACF5\uB3D9 \uCC3D\uC5C5. \uC774\uB7EC\uB2DD \uCEE8\uC124\uD305 \uC2DC\uC791.", en: "UBION Co-Founded" }
  ];
  const skills = [
    { group: "EdTech", items: ["LMS/LXP \uC124\uACC4", "Moodle", "TVET Systems", "ODA \uCEE8\uC124\uD305"] },
    { group: "AI & Agents", items: ["Claude API", "OpenClaw", "Multi-Agent Systems", "Claude Code"] },
    { group: "Platform", items: ["Ghost CMS", "Vercel", "Astro", "Telegram Bot"] },
    { group: "Languages", items: ["Korean (Native)", "English (Fluent)"] }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="about-grid" data-astro-cid-kh7btl4r> <div class="about-left" data-astro-cid-kh7btl4r> <p class="eyebrow" data-astro-cid-kh7btl4r>VP & Co-Founder · UBION</p> <h1 class="about-name" data-astro-cid-kh7btl4r> <em data-astro-cid-kh7btl4r>Scott</em><br data-astro-cid-kh7btl4r>
스콧
</h1> <p class="about-role" data-astro-cid-kh7btl4r>AI Transformation · EdTech · ODA Consulting</p> <p class="about-bio" data-astro-cid-kh7btl4r>
20년간 디지털 교육 컨설팅과 ODA 프로젝트를 이끌어온 EdTech 전문가.
        카자흐스탄, 베트남, 캄보디아, 스리랑카, 우즈베키스탄에서 KOICA, ADB, UNESCO와 함께
        교육 시스템을 구축했습니다.<br data-astro-cid-kh7btl4r><br data-astro-cid-kh7btl4r>
현재는 AI 에이전트 시스템으로 업무 자동화를 직접 구현하면서,
        그 경험을 책과 정책 제언으로 기록하고 있습니다.
</p> <div class="contact-list" data-astro-cid-kh7btl4r> <div class="contact-item" data-astro-cid-kh7btl4r> <span class="contact-label" data-astro-cid-kh7btl4r>Company</span> <a href="https://ubion.co.kr" class="contact-value" target="_blank" data-astro-cid-kh7btl4r>UBION (유비온)</a> </div> <div class="contact-item" data-astro-cid-kh7btl4r> <span class="contact-label" data-astro-cid-kh7btl4r>Newsroom</span> <a href="https://insight.ubion.global" class="contact-value" target="_blank" data-astro-cid-kh7btl4r>insight.ubion.global</a> </div> <div class="contact-item" data-astro-cid-kh7btl4r> <span class="contact-label" data-astro-cid-kh7btl4r>Based</span> <span class="contact-value" data-astro-cid-kh7btl4r>Seoul, Korea</span> </div> </div> </div> <div class="about-right" data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Timeline</h2> <div class="timeline" data-astro-cid-kh7btl4r> ${timeline.map((t) => renderTemplate`<div class="timeline-item" data-astro-cid-kh7btl4r> <span class="timeline-year" data-astro-cid-kh7btl4r>${t.year}</span> <div class="timeline-content" data-astro-cid-kh7btl4r> <p class="timeline-event" data-astro-cid-kh7btl4r>${t.event}</p> <p class="timeline-en" data-astro-cid-kh7btl4r>${t.en}</p> </div> </div>`)} </div> <h2 class="section-title" data-astro-cid-kh7btl4r>Expertise</h2> <div class="skills-grid" data-astro-cid-kh7btl4r> ${skills.map((s) => renderTemplate`<div class="skill-group" data-astro-cid-kh7btl4r> <h3 data-astro-cid-kh7btl4r>${s.group}</h3> <div class="skill-items" data-astro-cid-kh7btl4r> ${s.items.map((item) => renderTemplate`<span class="skill-item" data-astro-cid-kh7btl4r>${item}</span>`)} </div> </div>`)} </div> </div> </div> ` })}`;
}, "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/about.astro", void 0);

const $$file = "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
