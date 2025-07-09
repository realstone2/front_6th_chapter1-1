import { searchParamsStore } from "../../common/search-params/search-params-store";
import { 다음_페이지_로딩_컴포넌트 } from "./다음_페이지_로딩_컴포넌트";
import { productStore } from "../store/product-store";
import { throttle } from "../../../utils/throttle";
import { Component } from "../../../../componet";

export class 상품목록_하단_섹션 extends Component {
  observer: IntersectionObserver | null = null;

  render(): HTMLElement {
    const { isLoading, data } = productStore.value;
    const params = searchParamsStore.value;
    const { page = "1", limit = "20" } = params ?? {};
    const currentData = data.find(
      (v) => v.pagination.page === parseInt(page, 10) && v.pagination.limit === parseInt(limit, 10),
    );
    const element = document.createElement("div");

    if (currentData?.pagination.hasNext || isLoading) {
      element.innerHTML = /* HTML */ ` <div id="observer-target" class="text-center py-4">
        <div class="inline-flex items-center">
          <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
        </div>
      </div>`;
    } else {
      element.innerHTML = '<div class="text-center py-4 text-sm text-gray-500">모든 상품을 확인했습니다</div>';
    }

    return element;
  }

  goNextPage = throttle(() => {
    if (productStore.value.isLoading) {
      return;
    }
    const searchParams = new URLSearchParams(window.location.search);
    const prevPage = parseInt(searchParams.get("page") || "1", 10);
    searchParams.set("page", (prevPage + 1).toString());
    window.history.replaceState({}, "", `?${searchParams.toString()}`);
  }, 1500);

  registerObserver() {
    const observerTarget = document.getElementById("observer-target");
    if (!observerTarget) {
      return;
    }

    this.observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.goNextPage();
        }
      });
    });
    this.observer.observe(observerTarget);
  }

  componentDidMount() {
    this.registerObserver();
  }
  onUpdate(): void {
    this.registerObserver();
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
