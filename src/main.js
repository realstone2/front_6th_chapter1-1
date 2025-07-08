import { initSearchParamsListener } from "./features/common/search-params/search-params-store.js";
import { createRouter } from "./router/create-router.js";

const main = () => {
  createRouter();
  initSearchParamsListener();
};

const enableMocking = () =>
  import("./mocks/browser.js").then(({ worker }) =>
    worker.start({
      onUnhandledRequest: "bypass",
    }),
  );

// 애플리케이션 시작
if (import.meta.env.MODE !== "test") {
  enableMocking().then(main);
} else {
  main();
}
