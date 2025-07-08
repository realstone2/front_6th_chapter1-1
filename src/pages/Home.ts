import { 다음_페이지_로딩_컴포넌트 } from "../features/product/components/다음_페이지_로딩_컴포넌트";
import { 상품목록_로딩컴포넌트 } from "../features/product/components/상품목록_로딩컴포넌트";
import { 상품목록_메인레이아웃 } from "../features/product/components/상품목록_메인레이아웃";
import { 상품목록_상품_리스트_컴포넌트 } from "../features/product/components/상품목록_상품_리스트_컴포넌트";
import { handleProductList } from "../features/product/controller/handle-product-list";

import { productStore } from "../features/product/store/product-store";
import { clearSubscribers } from "../store/create-store";

//TODO: 스토어 핸들링쪽 리팩토링
/**
 * Home
 **/
export async function Home() {
  const root = document.getElementById("root");
  if (!root) return;

  root.innerHTML = 상품목록_메인레이아웃();

  handleProductList();

  productStore.subscribe(render);

  return clearSubscribers;
}

const render = () => {
  const container = document.getElementById("product-container");
  if (!container) return;

  const { isLoading, data } = productStore.value;

  container.innerHTML = "";

  if (isLoading && !data.length) {
    container.innerHTML = `${상품목록_로딩컴포넌트()}`;
    return;
  }

  container.innerHTML = 상품목록_상품_리스트_컴포넌트(data);
  //TODO: 옵저버 무한 스크롤 구현 필요
};
