import { NotFound } from "../features/common/components/NotFound.ts";
import { HomeComponent } from "../pages/Home";
import { ProductDetailPage } from "../pages/product/ProductDetailPage";
import { Component } from "../../componet";
import { Header } from "../features/common/components/Header";
import { handleModal } from "../features/cart/controller/handle-modal.ts";
import { searchParamsStore } from "../features/common/search-params/search-params-store.ts";

export const BASE_PATH = import.meta.env.PROD ? "/front_6th_chapter1-1" : "";

let currentComponentList: Array<InstanceType<typeof Component>> = [];

const routes: Array<{
  path: string;
  component: new (...args: any[]) => Component;
  title?: string;
  canGoBack?: boolean;
}> = [
  {
    path: BASE_PATH + "/",
    component: HomeComponent,
    title: "쇼핑몰",
  },
  {
    path: BASE_PATH + "/product/:productID",
    component: ProductDetailPage,
    title: "상품 상세",
    canGoBack: true,
  },
  {
    path: "*",
    component: NotFound,
  },
];

function findRoute(pathname: string) {
  for (const route of routes) {
    if (route.path === "*") continue; // "*"는 정규식 처리에서 제외
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
  if (currentComponentList) {
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

  currentComponentList.push(
    new Header({
      title: route.title,
      canGoBack: route.canGoBack,
    }),
  );

  currentComponentList.push(new route.component());

  currentComponentList.forEach((component) => {
    component.mount(appRoot);
  });
}

export function createRouter() {
  searchParamsStore.subscribe(() => {
    console.log("🐶 jindol log", "call");
    handleModal();
  });

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
        history.pushState({}, "", BASE_PATH + a.getAttribute("href"));
        router();
      }
    }
  });
  window.addEventListener("popstate", router);

  router();
}
