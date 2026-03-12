import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, g as decodeKey } from './chunks/astro/server_fjjE5Lvm.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///sessions/admiring-wizardly-babbage/mnt/portfolio/","adapterName":"","routes":[{"file":"file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/research/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/research","isIndex":false,"type":"page","pattern":"^\\/research\\/?$","segments":[[{"content":"research","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/research.astro","pathname":"/research","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/videos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/videos","isIndex":false,"type":"page","pattern":"^\\/videos\\/?$","segments":[[{"content":"videos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/videos.astro","pathname":"/videos","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/writing/agentic-learning-fabric/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/writing/agentic-learning-fabric","isIndex":false,"type":"page","pattern":"^\\/writing\\/agentic-learning-fabric\\/?$","segments":[[{"content":"writing","dynamic":false,"spread":false}],[{"content":"agentic-learning-fabric","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/writing/agentic-learning-fabric.astro","pathname":"/writing/agentic-learning-fabric","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/writing/ai-agent-revolution/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/writing/ai-agent-revolution","isIndex":false,"type":"page","pattern":"^\\/writing\\/ai-agent-revolution\\/?$","segments":[[{"content":"writing","dynamic":false,"spread":false}],[{"content":"ai-agent-revolution","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/writing/ai-agent-revolution.astro","pathname":"/writing/ai-agent-revolution","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/writing/ai-company-change/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/writing/ai-company-change","isIndex":false,"type":"page","pattern":"^\\/writing\\/ai-company-change\\/?$","segments":[[{"content":"writing","dynamic":false,"spread":false}],[{"content":"ai-company-change","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/writing/ai-company-change.astro","pathname":"/writing/ai-company-change","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/writing/ai-superweek/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/writing/ai-superweek","isIndex":false,"type":"page","pattern":"^\\/writing\\/ai-superweek\\/?$","segments":[[{"content":"writing","dynamic":false,"spread":false}],[{"content":"ai-superweek","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/writing/ai-superweek.astro","pathname":"/writing/ai-superweek","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/writing/ax-talent/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/writing/ax-talent","isIndex":false,"type":"page","pattern":"^\\/writing\\/ax-talent\\/?$","segments":[[{"content":"writing","dynamic":false,"spread":false}],[{"content":"ax-talent","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/writing/ax-talent.astro","pathname":"/writing/ax-talent","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/writing/university-education-ai/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/writing/university-education-ai","isIndex":false,"type":"page","pattern":"^\\/writing\\/university-education-ai\\/?$","segments":[[{"content":"writing","dynamic":false,"spread":false}],[{"content":"university-education-ai","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/writing/university-education-ai.astro","pathname":"/writing/university-education-ai","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/writing/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/writing","isIndex":false,"type":"page","pattern":"^\\/writing\\/?$","segments":[[{"content":"writing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/writing.astro","pathname":"/writing","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://your-domain.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/writing/agentic-learning-fabric.astro",{"propagation":"none","containsHead":true}],["/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/writing/ai-agent-revolution.astro",{"propagation":"none","containsHead":true}],["/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/writing/ai-company-change.astro",{"propagation":"none","containsHead":true}],["/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/writing/ai-superweek.astro",{"propagation":"none","containsHead":true}],["/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/writing/ax-talent.astro",{"propagation":"none","containsHead":true}],["/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/writing/university-education-ai.astro",{"propagation":"none","containsHead":true}],["/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/research.astro",{"propagation":"none","containsHead":true}],["/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/videos.astro",{"propagation":"none","containsHead":true}],["/sessions/admiring-wizardly-babbage/mnt/portfolio/src/pages/writing.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/research@_@astro":"pages/research.astro.mjs","\u0000@astro-page:src/pages/videos@_@astro":"pages/videos.astro.mjs","\u0000@astro-page:src/pages/writing/agentic-learning-fabric@_@astro":"pages/writing/agentic-learning-fabric.astro.mjs","\u0000@astro-page:src/pages/writing/ai-agent-revolution@_@astro":"pages/writing/ai-agent-revolution.astro.mjs","\u0000@astro-page:src/pages/writing/ai-company-change@_@astro":"pages/writing/ai-company-change.astro.mjs","\u0000@astro-page:src/pages/writing/ai-superweek@_@astro":"pages/writing/ai-superweek.astro.mjs","\u0000@astro-page:src/pages/writing/ax-talent@_@astro":"pages/writing/ax-talent.astro.mjs","\u0000@astro-page:src/pages/writing/university-education-ai@_@astro":"pages/writing/university-education-ai.astro.mjs","\u0000@astro-page:src/pages/writing@_@astro":"pages/writing.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_BxY9LNtX.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/about/index.html","/file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/projects/index.html","/file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/research/index.html","/file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/videos/index.html","/file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/writing/agentic-learning-fabric/index.html","/file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/writing/ai-agent-revolution/index.html","/file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/writing/ai-company-change/index.html","/file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/writing/ai-superweek/index.html","/file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/writing/ax-talent/index.html","/file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/writing/university-education-ai/index.html","/file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/writing/index.html","/file:///sessions/admiring-wizardly-babbage/mnt/portfolio/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"XgIwt1MzjxRtV/1DcO6FGpTDUrgr778L5WhlWm2swlg=","experimentalEnvGetSecretEnabled":false});

export { manifest };
