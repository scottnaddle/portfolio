import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_fjjE5Lvm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ArticleLayout } from '../../chunks/ArticleLayout_BqmIJVcc.mjs';
export { renderers } from '../../renderers.mjs';

const $$AiSuperweek = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ArticleLayout", $$ArticleLayout, { "title": "AI \uC288\uD37C\uC704\uD06C \uC774\uD6C4 \u2014 \uC9C0\uC2DD \uB178\uB3D9\uC758 \uBBF8\uB798\uC5D0 \uB300\uD55C \uBE0C\uB9AC\uD551", "titleEn": "After AI Super Week: The Future of Knowledge Work", "type": "\uBC1C\uD45C\uBB38 \xB7 Presentation", "date": "2025", "venue": "\uC131\uACF5\uD68C\uB300 AIED \uC6CC\uD06C\uC0F5", "description": "2025\uB144 \uC5F0\uC774\uC5B4 \uBC1C\uD45C\uB41C AI \uBAA8\uB378\uB4E4\uC774 \uC9C0\uC2DD \uB178\uB3D9\uC758 \uC9C0\uD615\uC744 \uC5B4\uB5BB\uAC8C \uBC14\uAFB8\uB294\uC9C0\uB97C \uBD84\uC11D\uD55C \uBE0C\uB9AC\uD551 \uC790\uB8CC.", "tags": ["AI", "Future of Work", "Knowledge Work", "EdTech"] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
2025년은 AI 분야에서 '슈퍼위크'라는 말이 새삼 무색할 만큼 많은 발표가 쏟아진 해였다.
    Claude 3.5 Sonnet, GPT-4o, Gemini Ultra 등 주요 모델들이 잇따라 공개되면서, 이제 AI는
    단순한 도구를 넘어 지식 노동의 구조 자체를 재편하기 시작했다.
</p> <p>
이 브리핑은 그 변화의 한가운데서 교육 현장에 있는 사람들을 위해 작성되었다.
    '무엇이 달라졌는가'보다 '어떻게 대응해야 하는가'에 집중하며, AI가 가져오는 위협과
    기회를 교육자·연구자·조직의 관점에서 정리한다.
</p> <hr class="divider"> <h2>핵심 논지</h2> <p>
AI 슈퍼위크 이후의 세계에서 지식 노동자의 역할은 사라지는 것이 아니라 재정의된다.
    반복적 인지 작업의 자동화는 오히려 인간 고유의 판단력, 맥락 해석 능력, 그리고
    관계 설계 능력의 가치를 높인다. 이 브리핑은 그 전환을 어떻게 준비할지에 대한
    실천적 제언을 담고 있다.
</p> <hr class="divider"> <p style="font-size: 0.78rem; color: var(--muted); font-family: 'DM Mono', monospace;">
전체 발표 자료 원문은 준비 중입니다.
</p> ` })}`;
}, "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/writing/ai-superweek.astro", void 0);

const $$file = "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/writing/ai-superweek.astro";
const $$url = "/writing/ai-superweek";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AiSuperweek,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
