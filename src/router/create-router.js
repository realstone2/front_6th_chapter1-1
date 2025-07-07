export const routes = [
  {
    path: "/",
    render: null,
  },

  {
    path: "*",
    render: null,
  },
];

function findRoute(pathname) {
  for (const route of routes) {
    // /product/:id → ^/product/[^/]+$
    const regexPath = route.path.replace(/:([^/]+)/g, "[^/]+");
    const regex = new RegExp("^" + regexPath + "$");
    if (regex.test(pathname)) {
      return route;
    }
  }
  // 404 fallback
  return routes.find((r) => r.path === "*");
}

// 라우터 함수
function router() {
  const route = findRoute(window.location.pathname);
  if (!route.render) {
    return;
  }

  route.render();
}

export function createRouter() {
  document.body.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-link]");
    if (a && a.href) {
      // 외부 링크/파일 다운로드 등은 무시
      if (a.host !== location.host) return;
      e.preventDefault();
      if (a.getAttribute("href") !== location.pathname) {
        history.pushState({}, "", a.getAttribute("href"));
        router();
      }
    }
  });
  window.addEventListener("popstate", console.log);

  router();
}
