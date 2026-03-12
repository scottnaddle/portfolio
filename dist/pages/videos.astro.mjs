import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_fjjE5Lvm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BOeBF4OE.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Videos = createComponent(($$result, $$props, $$slots) => {
  const videos = [
    {
      title: "\uC0D8\uD50C \uC601\uC0C1 \uC81C\uBAA9",
      titleEn: "Sample Video Title",
      youtubeId: "dQw4w9WgXcQ",
      // 실제 YouTube ID로 교체하세요
      date: "2025",
      duration: "24:30",
      type: "\uBC1C\uD45C \xB7 Talk",
      desc: "\uC5EC\uAE30\uC5D0 \uC601\uC0C1 \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694.",
      tags: ["AI", "EdTech"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Videos", "data-astro-cid-73ne5lbz": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<header class="page-header" data-astro-cid-73ne5lbz> <h1 class="page-title" data-astro-cid-73ne5lbz>
Talks &<br data-astro-cid-73ne5lbz> <em data-astro-cid-73ne5lbz>Videos</em> </h1> <p class="page-intro" data-astro-cid-73ne5lbz>
컨퍼런스 발표, 강의, 인터뷰.<br data-astro-cid-73ne5lbz>
교육과 AI의 교차점에서 이야기합니다.
</p> </header> <div class="videos-list" data-astro-cid-73ne5lbz> ${videos.length > 0 ? videos.map((v) => renderTemplate`<div class="video-item" data-astro-cid-73ne5lbz> <div class="video-thumb" data-astro-cid-73ne5lbz> <div class="video-thumb-placeholder" data-astro-cid-73ne5lbz> <div class="play-icon" data-astro-cid-73ne5lbz>▶</div> </div> </div> <div class="video-info" data-astro-cid-73ne5lbz> <div class="video-meta" data-astro-cid-73ne5lbz> <span class="video-type" data-astro-cid-73ne5lbz>${v.type}</span> <span class="video-duration" data-astro-cid-73ne5lbz>${v.duration}</span> <span class="video-duration" data-astro-cid-73ne5lbz>${v.date}</span> </div> <h2 class="video-title" data-astro-cid-73ne5lbz>${v.title}</h2> <p class="video-title-en" data-astro-cid-73ne5lbz>${v.titleEn}</p> <p class="video-desc" data-astro-cid-73ne5lbz>${v.desc}</p> <div class="video-tags" data-astro-cid-73ne5lbz> ${v.tags.map((t) => renderTemplate`<span class="tag" data-astro-cid-73ne5lbz>${t}</span>`)} </div> </div> </div>`) : renderTemplate`<div class="empty-state" data-astro-cid-73ne5lbz> <p data-astro-cid-73ne5lbz>영상 콘텐츠를 준비 중입니다.<br data-astro-cid-73ne5lbz>곧 업데이트될 예정입니다.</p> </div>`} </div> ` })}`;
}, "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/videos.astro", void 0);

const $$file = "/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/videos.astro";
const $$url = "/videos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Videos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
