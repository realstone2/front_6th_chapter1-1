import { getProducts } from "../api/productApi";
import { 상품목록_레이아웃_로딩 } from "../features/product/components/상품목록_레이아웃_로딩";
import { 상품목록_레이아웃_로딩완료 } from "../features/product/components/상품목록_레이아웃_로딩완료";

import { Product, productStore } from "../features/product/store/product-store";

//TODO: 스토어 핸들링쪽 리팩토링
/**
 * Home
 **/
export async function Home() {
  const searchParams = new URLSearchParams(window.location.search);

  const queryObject = Object.fromEntries(searchParams.entries());

  if (searchParams.get("limit") !== productStore.value.limit?.toString()) {
    productStore.setValue((prev) => ({
      ...prev,
      data: [],
      limit: parseInt(searchParams.get("limit") || "20", 10),
    }));
  }

  productStore.setValue((prev) => ({
    ...prev,
    isLoading: true,
  }));

  render();

  const data = await getProducts(queryObject).catch((err) =>
    productStore.setValue((prev) => ({
      ...prev,
      error: err.toString(),
    })),
  );

  console.log("🐶 jindol log ", data);

  productStore.setValue((prev) => ({
    ...prev,
    isLoading: false,
    data: prev.data.concat([
      {
        items: data.products,
        page: parseInt(queryObject.page || "1", 10),
      },
    ]),
  }));

  const { isLoading } = productStore.value;

  render();
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
