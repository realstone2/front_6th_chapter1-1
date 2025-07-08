import { Product, ProductListResponse } from "../../../api/productApi";
import { 다음_페이지_로딩_컴포넌트 } from "./다음_페이지_로딩_컴포넌트";
import { 상품_아이템_컴포넌트 } from "./상품_아이템_컴포넌트";

// 상품 목록 영역에 실제 상품 리스트를 렌더링
export function 상품목록_상품_리스트_컴포넌트(props: ProductListResponse[]) {
  const products = props.flatMap((v) => v.products);

  const lastItem = props[props.length - 1];

  return /* HTML */ `
    <div>
      <!-- 상품 개수 정보 -->
      <div class="mb-4 text-sm text-gray-600">
        총 <span class="font-medium text-gray-900">${products.length}개</span>의 상품
      </div>
      <!-- 상품 그리드 -->
      <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
        ${products.map((product) => 상품_아이템_컴포넌트(product)).join("")}
      </div>
      ${lastItem.pagination.hasNext
        ? 다음_페이지_로딩_컴포넌트()
        : '<div class="text-center py-4 text-sm text-gray-500">모든 상품을 확인했습니다</div>'}
    </div>
  `;
}
