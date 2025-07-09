import { Component } from "../../componet";
import { 상품목록_로딩컴포넌트 } from "../features/product/components/상품목록_로딩컴포넌트";
import { 상품목록_메인레이아웃 } from "../features/product/components/상품목록_메인레이아웃";
import { 상품목록_상품_리스트_컴포넌트 } from "../features/product/components/상품목록_상품_리스트_컴포넌트";
import { handleProductList } from "../features/product/controller/handle-product-list";

import { 카테고리_필터_섹션 } from "../features/category/components/카테고리_필터_섹션";
import { 상품목록_하단_섹션 } from "../features/product/components/상품목록_하단_섹션";

export class HomeComponent extends Component {
  상품_리스트_컴포넌트 = new 상품목록_상품_리스트_컴포넌트();
  로딩_컴포넌트 = new 상품목록_로딩컴포넌트();
  상품목록_하단_섹션 = new 상품목록_하단_섹션();
  카테고리_필터_섹션 = new 카테고리_필터_섹션();

  render(): HTMLElement {
    const el = document.createElement("div");
    el.innerHTML = 상품목록_메인레이아웃();
    return el;
  }

  componentDidMount() {
    handleProductList();
    const productContainer = document.getElementById("product-container");
    const categoryContainer = document.getElementById("category-filter-space");

    if (productContainer) {
      this.상품_리스트_컴포넌트.mount(productContainer);
      this.로딩_컴포넌트.mount(productContainer);
      this.상품목록_하단_섹션.mount(productContainer);
    }

    if (categoryContainer) {
      this.카테고리_필터_섹션.mount(categoryContainer);
    }
  }

  componentWillUnmount() {
    this.상품_리스트_컴포넌트.unmount();
    this.로딩_컴포넌트.unmount();
    this.상품목록_하단_섹션.unmount();
    this.카테고리_필터_섹션.unmount();
  }
}
