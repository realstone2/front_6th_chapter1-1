import { searchParamsStore } from "../../common/search-params/search-params-store";
import { 다음_페이지_로딩_컴포넌트 } from "./다음_페이지_로딩_컴포넌트";
import { productStore } from "../store/product-store";
import { throttle } from "../../../utils/throttle";

export const 상품목록_하단_섹션 = () => {
  const { isLoading, data } = productStore.value;

  const params = searchParamsStore.value;

  const { page = "1", limit = "20", search = "", category1 = "", category2 = "", sort = "price_asc" } = params ?? {};

  const currentData = data.find(
    (v) => v.pagination.page === parseInt(page, 10) && v.pagination.limit === parseInt(limit, 10),
  );

  const container = document.getElementById("product-container");
  if (!container) return;

  const element = document.createElement("div");

  if (currentData?.pagination.hasNext || isLoading) {
    element.innerHTML = 다음_페이지_로딩_컴포넌트();
  } else {
    element.innerHTML = '<div class="text-center py-4 text-sm text-gray-500">모든 상품을 확인했습니다</div>';
  }

  container.appendChild(element);

  const observerTarget = document.getElementById("observer-target");

  if (!observerTarget) {
    return;
  }

  const goNextPage = throttle(() => {
    if (isLoading) {
      return;
    }

    const searchParams = new URLSearchParams(window.location.search);

    const prevPage = parseInt(searchParams.get("page") || "1", 10);

    searchParams.set("page", (prevPage + 1).toString());

    window.history.pushState({}, "", `?${searchParams.toString()}`);
  }, 1500);

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        goNextPage();
        obs.disconnect();
      }
    });
  });

  observer.observe(observerTarget);
};
