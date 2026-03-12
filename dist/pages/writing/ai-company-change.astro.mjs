import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_fjjE5Lvm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ArticleLayout } from '../../chunks/ArticleLayout_BqmIJVcc.mjs';
export { renderers } from '../../renderers.mjs';

const $$AiCompanyChange = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ArticleLayout", $$ArticleLayout, { "title": "AI\uB294 \uD68C\uC0AC\uB97C \uC5B4\uB5BB\uAC8C \uBC14\uAFC0\uAE4C?", "titleEn": "How AI Transforms Organizations", "type": "\uC5D0\uC138\uC774 \xB7 Essay", "date": "2025", "venue": "\uC131\uACF5\uD68C\uB300 AIED \uC6CC\uD06C\uC0F5", "description": "AI \uB3C4\uC785\uC774 \uC870\uC9C1 \uAD6C\uC870\uC640 \uC5C5\uBB34 \uBC29\uC2DD\uC5D0 \uBBF8\uCE58\uB294 \uC2E4\uC9C8\uC801 \uC601\uD5A5\uC744 \uD0D0\uAD6C\uD55C\uB2E4. \uD68C\uC0AC\uB294 \uC5B4\uB5BB\uAC8C \uB2EC\uB77C\uC9C0\uACE0, \uC6B0\uB9AC\uB294 \uC5B4\uB5BB\uAC8C \uC900\uBE44\uD574\uC57C \uD558\uB294\uAC00.", "tags": ["AI", "Organization", "Future of Work", "Digital Transformation"] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
AI가 조직을 바꾼다는 말은 이제 너무 많이 들어서 무감각해졌다. 하지만 '어떻게'는
    여전히 불분명하다. 비용이 줄어든다는 것인가, 사람이 줄어든다는 것인가,
    아니면 일하는 방식이 근본적으로 달라진다는 것인가.
</p> <p>
이 글은 AI 도입이 조직에 가져오는 변화를 세 개의 레이어로 나누어 살펴본다.
    첫째는 개인 생산성의 변화, 둘째는 팀 협업 구조의 변화, 셋째는 조직 전략과
    의사결정 방식의 변화다. 각 레이어는 서로 독립적이지 않고 연쇄적으로 작동한다.
</p> <hr class="divider"> <h2>세 가지 변화의 레이어</h2> <h3>1. 개인 생산성</h3> <p>
가장 먼저 체감되는 변화는 개인 단위의 생산성이다. 문서 작성, 분석, 코딩,
    번역 등 반복적 인지 작업이 빨라지면서, 한 사람이 커버할 수 있는 업무 범위가
    확장된다. 문제는 이 확장이 늘 환영받지는 않는다는 것이다.
</p> <h3>2. 팀 협업 구조</h3> <p>
AI가 개인의 생산성을 높이면, 팀의 협업 구조도 바뀌어야 한다.
    AI를 잘 쓰는 사람과 그렇지 않은 사람 사이의 생산성 격차가 벌어지면서,
    팀 내 역할 분담과 평가 기준이 흔들린다.
</p> <h3>3. 조직 전략</h3> <p>
가장 느리게, 그러나 가장 깊이 일어나는 변화는 전략 레이어다.
    AI가 의사결정의 보조 도구로 들어오면서, 조직은 '무엇을 결정할 것인가'보다
    '어떤 질문을 던질 것인가'를 더 중요하게 여기기 시작한다.
</p> <hr class="divider"> <p style="font-size: 0.78rem; color: var(--muted); font-family: 'DM Mono', monospace;">
전체 에세이 원문은 준비 중입니다.
</p> ` })}`;
}, "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/writing/ai-company-change.astro", void 0);

const $$file = "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/writing/ai-company-change.astro";
const $$url = "/writing/ai-company-change";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AiCompanyChange,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
