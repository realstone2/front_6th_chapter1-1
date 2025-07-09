import { Component } from "../../componet";
import { 상품목록_로딩컴포넌트 } from "../features/product/components/상품목록_로딩컴포넌트";
import { 상품목록_메인레이아웃 } from "../features/product/components/상품목록_메인레이아웃";
import { 상품목록_상품_리스트_컴포넌트 } from "../features/product/components/상품목록_상품_리스트_컴포넌트";
import { handleProductList } from "../features/product/controller/handle-product-list";
import { productStore } from "../features/product/model/product-store";

import { throttle } from "../utils/throttle";
import { 상품목록_하단_섹션 } from "../features/product/components/상품목록_하단_섹션";
import { searchParamsStore } from "../features/common/search-params/search-params-store";
import { 카테고리_필터_섹션 } from "../features/category/components/카테고리_필터_섹션";

export class HomeComponent extends Component {
  상품_리스트_컴포넌트 = new 상품목록_상품_리스트_컴포넌트();
  로딩_컴포넌트 = new 상품목록_로딩컴포넌트();
  상품목록_하단_섹션 = new 상품목록_하단_섹션();
  카테고리_필터_섹션 = new 카테고리_필터_섹션();

  unsubscribeList: Array<() => void> = [];

  renderItem() {
    this.상품_리스트_컴포넌트.unmount();
    this.로딩_컴포넌트.unmount();
    this.상품목록_하단_섹션.unmount();
    this.카테고리_필터_섹션.unmount();

    const categoryContainer = document.getElementById("category-filter-space");

    if (this.카테고리_필터_섹션.isMounted) {
      this.카테고리_필터_섹션.update();
    } else {
      this.카테고리_필터_섹션.mount(categoryContainer!);
    }

    const container = document.getElementById("product-container");

    if (!container) {
      return;
    }

    const { isLoading, data } = productStore.value;

    if (isLoading && !data.length) {
      this.상품_리스트_컴포넌트.unmount();
      this.상품목록_하단_섹션.unmount();

      if (!this.로딩_컴포넌트.isMounted) {
        this.로딩_컴포넌트.mount(container);
      }
      this.로딩_컴포넌트.update();
      return;
    }

    this.로딩_컴포넌트.unmount();

    if (!this.상품_리스트_컴포넌트.isMounted) {
      this.상품_리스트_컴포넌트.mount(container);
    }
    if (!this.상품목록_하단_섹션.isMounted) {
      this.상품목록_하단_섹션.mount(container);
    }
    this.상품_리스트_컴포넌트.update();
    this.상품목록_하단_섹션.update();
  }

  render(): HTMLElement {
    const el = document.createElement("div");
    el.innerHTML = 상품목록_메인레이아웃();
    return el;
  }

  componentDidMount() {
    handleProductList();

    this.unsubscribeList.push(productStore.subscribe(throttle(() => this.update(), 200)));

    this.unsubscribeList.push(() => {
      this.상품_리스트_컴포넌트.unmount();
      this.로딩_컴포넌트.unmount();
      this.상품목록_하단_섹션.unmount();
    });

    this.renderItem();
  }

  componentWillUnmount() {
    this.unsubscribeList.forEach((unsubscribe) => unsubscribe());
    this.unsubscribeList = [];
  }

  update() {
    this.renderItem();
  }
}
