import { NotFound } from "../features/common/components/NotFound";
import { HomeComponent } from "../pages/Home";
import { ProductDetail } from "../pages/product/ProductDetail";
import { Component } from "../../componet";
import { Header } from "../features/common/components/Header";

let currentComponent: InstanceType<typeof Component> | null = null;

const routes: Array<{
  path: string;
  component: new (...args: any[]) => Component;
}> = [
  {
    path: "/",
    component: HomeComponent,
  },
  // {
  //   path: "/product/:productID",
  //   component: ProductDetail,
  // },
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

function router() {
  if (currentComponent) {
    currentComponent.unmount();
    currentComponent = null;
  }
  const route = findRoute(window.location.pathname);
  if (!route?.component) {
    return;
  }

  const appRoot = getAppRoot();

  if (!appRoot) {
    return;
  }

  currentComponent = new route.component();
  currentComponent.mount(appRoot);
}

export function createRouter() {
  const header = new Header();

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
        router();
      }
    }
  });
  window.addEventListener("popstate", router);

  const app = getAppRoot();

  header.mount(app);

  router();
}
