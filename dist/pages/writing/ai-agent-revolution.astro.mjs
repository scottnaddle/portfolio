import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_fjjE5Lvm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ArticleLayout } from '../../chunks/ArticleLayout_BqmIJVcc.mjs';
export { renderers } from '../../renderers.mjs';

const $$AiAgentRevolution = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ArticleLayout", $$ArticleLayout, { "title": "AI Agent \uD601\uBA85 \u2014 \uD604\uC7A5 \uBCF4\uACE0\uC11C", "titleEn": "AI Agent Revolution: A Field Report", "type": "\uBC1C\uD45C\uBB38 \xB7 Presentation", "date": "2026", "venue": "\uD14C\uD06C\uB370\uC774 2026", "description": "2026\uB144 \uD14C\uD06C\uB370\uC774 \uBC1C\uD45C. AI \uC5D0\uC774\uC804\uD2B8\uAC00 \uC2E4\uC81C \uC5C5\uBB34 \uD604\uC7A5\uC5D0\uC11C \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uACE0 \uC788\uB294\uC9C0, \uC9C1\uC811 \uAD6C\uCD95\uD558\uACE0 \uC6B4\uC601\uD55C \uACBD\uD5D8\uC744 \uBC14\uD0D5\uC73C\uB85C \uD55C \uD604\uC7A5 \uBCF4\uACE0\uC11C.", "tags": ["AI Agent", "Automation", "Future of Work", "Practical AI"] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
에이전트는 이제 논문 밖에 있다. 2025년을 지나며 AI 에이전트는 실험실을 벗어나
    실제 업무 현장으로 들어왔다. 문서를 작성하고, 데이터를 분석하고, 회의를 요약하고,
    심지어 다른 에이전트를 호출하는 멀티에이전트 워크플로우까지 — 이 모든 것이
    지금 실제로 일어나고 있다.
</p> <p>
이 발표는 AI 에이전트를 직접 설계하고 운영한 경험에서 나온 현장 보고서다.
    무엇이 예상대로 작동했고, 무엇이 예상 밖이었으며, 조직에 에이전트를 도입할 때
    실질적으로 부딪히는 문제들은 무엇인지를 다룬다.
</p> <hr class="divider"> <h2>에이전트 도입의 현실</h2> <h3>기술보다 설계가 먼저다</h3> <p>
에이전트를 만드는 것보다 '무엇을 시킬 것인가'를 정의하는 것이 훨씬 어렵다.
    업무 프로세스를 AI가 처리할 수 있는 단위로 분해하는 설계 작업이 핵심이다.
</p> <h3>실패는 기술이 아닌 경계에서 온다</h3> <p>
에이전트가 실패하는 지점은 대부분 기술적 한계가 아니라 불명확한 지시, 맥락 부재,
    또는 인간의 판단이 필요한 경계에서다. 이 경계를 잘 설계하는 것이
    에이전트 운용의 핵심 역량이다.
</p> <hr class="divider"> <p style="font-size: 0.78rem; color: var(--muted); font-family: 'DM Mono', monospace;">
전체 발표 자료 원문은 준비 중입니다.
</p> ` })}`;
}, "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/writing/ai-agent-revolution.astro", void 0);

const $$file = "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/writing/ai-agent-revolution.astro";
const $$url = "/writing/ai-agent-revolution";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AiAgentRevolution,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
