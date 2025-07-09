import { Component } from "../../../../componet";
import { ProductListResponse } from "../../../api/productApi";
import { productStore } from "../model/product-store";
import { 상품_아이템_컴포넌트 } from "./상품_아이템_컴포넌트";

export class 상품목록_상품_리스트_컴포넌트 extends Component {
  render(): HTMLElement {
    const productList = productStore.value.data;

    const products = productList.flatMap((v) => v.products);
    const el = document.createElement("div");
    el.innerHTML = /* HTML */ `
      <div>
        <div class="mb-4 text-sm text-gray-600">
          총 <span class="font-medium text-gray-900">${products.length}개</span>의 상품
        </div>
        <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
          ${products.map((product) => 상품_아이템_컴포넌트(product)).join("")}
        </div>
      </div>
    `;
    return el;
  }
}
