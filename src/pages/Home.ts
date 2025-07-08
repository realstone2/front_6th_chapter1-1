import { getProducts } from "../api/productApi";
import { 상품목록_레이아웃_로딩 } from "../features/product/components/상품목록_레이아웃_로딩";
import { 상품목록_레이아웃_로딩완료 } from "../features/product/components/상품목록_레이아웃_로딩완료";
import { handleProductList } from "../features/product/controller/handle-product-list";

import { productStore } from "../features/product/store/product-store";
import { clearSubscribers } from "../store/create-store";

//TODO: 스토어 핸들링쪽 리팩토링
/**
 * Home
 **/
export async function Home() {
  handleProductList();

  productStore.subscribe(render);

  return clearSubscribers;
}

const render = () => {
  const root = document.getElementById("root");
  if (!root) return;

  const { isLoading, data } = productStore.value;

  root.innerHTML = "";

  if (isLoading) {
    root.innerHTML = 상품목록_레이아웃_로딩();
    return;
  }

  root.innerHTML = 상품목록_레이아웃_로딩완료(data.flatMap((v) => v.items));
};
