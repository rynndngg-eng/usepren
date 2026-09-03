const indexDocument = "index.html";

function assetRequest(request, pathname) {
  const url = new URL(request.url);
  url.pathname = pathname;
  return new Request(url, request);
}

export default {
  async fetch(request, env) {
    const directResponse = await env.ASSETS.fetch(request);
    if (directResponse.status !== 404 || !["GET", "HEAD"].includes(request.method)) {
      return directResponse;
    }

    const url = new URL(request.url);
    const pathname = decodeURIComponent(url.pathname);
    if (!pathname.split("/").at(-1)?.includes(".")) {
      const routeIndex = `${pathname.replace(/\/$/, "")}/${indexDocument}`;
      const routeResponse = await env.ASSETS.fetch(assetRequest(request, routeIndex));
      if (routeResponse.status !== 404) return routeResponse;
    }

    const notFound = await env.ASSETS.fetch(assetRequest(request, "/404.html"));
    return new Response(notFound.body, {
      status: 404,
      headers: notFound.headers,
    });
  },
};
