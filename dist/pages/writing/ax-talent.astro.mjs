import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_fjjE5Lvm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ArticleLayout } from '../../chunks/ArticleLayout_BqmIJVcc.mjs';
export { renderers } from '../../renderers.mjs';

const $$AxTalent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ArticleLayout", $$ArticleLayout, { "title": "AX \uC778\uC7AC\uC0C1 \uC7AC\uC815\uC758\uC640 \uD601\uC2E0 \uC804\uB7B5", "titleEn": "Redefining AX Talent and Innovation Strategy", "type": "\uBC1C\uD45C\uBB38 \xB7 Presentation", "date": "2025", "venue": "\uC131\uACF5\uD68C\uB300 AIED \uC6CC\uD06C\uC0F5", "description": "AI \uC804\uD658(AX) \uC2DC\uB300\uC5D0 \uC870\uC9C1\uC774 \uD544\uC694\uB85C \uD558\uB294 \uC778\uC7AC\uC0C1\uC740 \uBB34\uC5C7\uC778\uAC00. \uAE30\uC220 \uC5ED\uB7C9\uC744 \uB118\uC5B4 \uC0C8\uB85C\uC6B4 \uC778\uC7AC \uAE30\uC900\uACFC \uC870\uC9C1 \uD601\uC2E0 \uC804\uB7B5\uC744 \uC81C\uC2DC\uD55C\uB2E4.", "tags": ["AX", "Talent", "Innovation", "Organization", "AI"] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
'AI를 잘 다루는 사람'은 AX 시대의 인재상이 아니다. AI는 도구다. 진짜 질문은
    그 도구를 손에 쥔 사람이 어떤 문제를 보고, 어떤 방식으로 풀어가느냐다.
</p> <p>
이 발표는 AX 시대의 인재를 기술 역량이 아닌 사고 방식으로 정의하려 한다.
    조직이 AI를 도입했을 때 성과를 만들어내는 사람들의 공통점은 무엇인가.
    그리고 그런 사람들을 어떻게 찾고, 키우고, 조직 안에 배치할 것인가.
</p> <hr class="divider"> <h2>AX 인재의 세 가지 조건</h2> <h3>1. 질문 설계 능력</h3> <p>
AI는 답을 만든다. 그러나 좋은 답은 좋은 질문에서 나온다.
    AX 인재는 복잡한 문제를 AI가 처리할 수 있는 질문으로 분해하고 재설계하는
    능력을 갖추고 있다.
</p> <h3>2. 판단과 검증의 책임감</h3> <p>
AI 결과물을 그대로 수용하는 것이 아니라 비판적으로 검토하고 책임지는 태도.
    이것은 기술 역량이 아니라 전문가적 윤리와 판단력의 문제다.
</p> <h3>3. 협업과 조율의 설계</h3> <p>
AI를 개인 도구로 쓰는 것을 넘어, 팀 단위의 AI 워크플로우를 설계하고
    이해관계자들과 소통하며 조율할 수 있는 능력.
</p> <hr class="divider"> <p style="font-size: 0.78rem; color: var(--muted); font-family: 'DM Mono', monospace;">
전체 발표 자료 원문은 준비 중입니다.
</p> ` })}`;
}, "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/writing/ax-talent.astro", void 0);

const $$file = "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/writing/ax-talent.astro";
const $$url = "/writing/ax-talent";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AxTalent,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
