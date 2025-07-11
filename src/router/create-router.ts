import { NotFound } from "../features/common/components/NotFound";
import { HomeComponent } from "../pages/Home";
import { ProductDetailPage } from "../pages/product/ProductDetailPage";
import { Component } from "../../componet";
import { Header } from "../features/common/components/Header";

const routes: Array<{
  path: string;
  component: new (...args: any[]) => Component;
  title?: string;
  canGoBack?: boolean;
}> = [
  {
    path: "/",
    component: HomeComponent,
    title: "쇼핑몰",
  },
  {
    path: "/product/:productID",
    component: ProductDetailPage,
    title: "상품 상세",
    canGoBack: true,
  },
  // {
  //   path: "*",
  //   component: NotFound,
  // },
];

function findRoute(pathname: string) {
  for (const route of routes) {
    const regexPath = route.path.replace(/:([^/]+)/g, "[^/]+");
    const regex = new RegExp("^" + regexPath + "$", "i");
    if (regex.test(pathname)) {
      return route;
    }
  }
  return routes.find((r) => r.path === "*");
}

function getAppRoot() {
  return document.getElementById("root") || document.body;
}

function router(currentComponentList: Array<InstanceType<typeof Component>> = []) {
  if (currentComponentList.length) {
    currentComponentList.map((component) => {
      component.unmount();
    });
    currentComponentList = [];
  }
  const route = findRoute(window.location.pathname);
  if (!route?.component) {
    return;
  }

  const appRoot = getAppRoot();

  if (!appRoot) {
    return;
  }

  currentComponentList = [
    new Header({
      title: route.title,
      canGoBack: route.canGoBack,
    }),
    new route.component(),
  ];

  console.log("🐶 mount componetns lenght ", currentComponentList.length);
  currentComponentList.forEach((component) => {
    component.mount(appRoot);
  });
}

export function createRouter() {
  let currentComponentList: Array<InstanceType<typeof Component>> = [];

  document.body.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement)?.closest("a[data-link]");
    if (a && a instanceof HTMLAnchorElement && a.href) {
      if ((e.target as HTMLElement).closest("[event-id]")) {
        e.preventDefault();
        return;
      }

      if (a.host !== location.host) {
        return;
      }

      e.preventDefault();
      if (a.getAttribute("href") !== location.pathname) {
        history.pushState({}, "", a.getAttribute("href"));
        router(currentComponentList);
      }
    }
  });
  window.addEventListener("popstate", router.bind(null, currentComponentList));

  router();
}
