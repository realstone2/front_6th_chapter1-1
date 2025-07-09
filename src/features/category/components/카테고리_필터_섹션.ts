import { Component } from "../../../../componet";
import { throttle } from "../../../utils/throttle";
import { searchParamsStore } from "../../common/search-params/search-params-store";
import { handleCategoryList } from "../controller/handle-category-list";
import { categoryStore } from "../model/category-store";

export class 카테고리_필터_섹션 extends Component {
  unsubscribeList: Array<() => void> = [];

  render(): HTMLElement {
    const container = document.createElement("section");

    console.log("🐶 jindol log ", categoryStore.value.isLoading);
    if (categoryStore.value.isLoading) {
      container.innerHTML = /* HTML */ ` <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">카테고리:</label>
          <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
        </div>
        <div class="flex flex-wrap gap-2" id="category1-area">카테고리 로딩 중...</div>`;
      return container;
    }

    const params = searchParamsStore.value;
    const { category1 = "", category2 = "" } = params ?? {};
    const data = categoryStore.value.data;

    // 1뎁스 카테고리 목록
    const category1List = Object.keys(data);
    // 2뎁스 카테고리 목록 (category1이 선택된 경우)
    const category2List = category1 && data[category1] ? Object.keys(data[category1]) : [];

    // 상단: 전체/1뎁스/2뎁스 경로
    let breadcrumbHtml = `<label class='text-sm text-gray-600'>카테고리:</label>`;
    breadcrumbHtml += `<button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>`;
    if (category1) {
      breadcrumbHtml += /** HTML */ `  <span class="text-xs text-gray-500">&gt;</span> 
       <button data-breadcrumb="category1" data-category1=${category1} class="text-xs hover:text-blue-800 hover:underline">${category1}</button>
`;
    }

    if (category2) {
      breadcrumbHtml += ` <span class="text-xs text-gray-500">&gt;</span> <span class="text-xs text-gray-600 cursor-default">${category2}</span>`;
    }

    let buttonHtml = "";
    if (!category1) {
      buttonHtml = category1List
        .map(
          (category) =>
            `<button
          class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50${category === category1 ? " bg-blue-50 text-blue-700 border-blue-400 font-bold" : ""}"
          data-category1="${category}"
        >${category}</button>`,
        )
        .join("");
    } else {
      buttonHtml = category2List
        .map(
          (category) =>
            `<button
          class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50${category === category2 ? " bg-blue-50 text-blue-700 border-blue-400 font-bold" : ""}"
          data-category2="${category}"
        >${category}</button>`,
        )
        .join("");
    }

    container.innerHTML = `
      <div class="flex items-center gap-2 mb-2">${breadcrumbHtml}</div>
      <div class="flex flex-wrap gap-2">${buttonHtml}</div>
    `;

    // 이벤트 위임: 전체/1뎁스/2뎁스 버튼 클릭
    container.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      const params = new URLSearchParams(window.location.search);

      if (target.dataset.breadcrumb === "reset") {
        params.delete("category1");
        params.delete("category2");
      }
      if (target.dataset.category1) {
        params.set("category1", target.dataset.category1 ?? "");
        params.delete("category2");
      }
      if (target.dataset.category2) {
        params.set("category2", target.dataset.category2 ?? "");
      }

      const newUrl = window.location.pathname + (params.toString() ? `?${params.toString()}` : "");
      window.history.replaceState({}, "", newUrl);
    });

    return container;
  }

  componentDidMount(): void {
    handleCategoryList();
    this.unsubscribeList.push(categoryStore.subscribe(throttle(() => this.update(), 200)));
  }

  componentWillUnmount(): void {
    this.unsubscribeList.forEach((unsubscribe) => unsubscribe());
    this.unsubscribeList = [];
  }
}
