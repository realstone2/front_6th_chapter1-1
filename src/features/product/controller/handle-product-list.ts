import { getProducts } from "../../../api/productApi";
import { searchParamsStore } from "../../common/search-params/search-params-store";

import { productStore } from "../model/product-store";

export const handleProductList = () => {
  return searchParamsStore.subscribe(async () => {
    const params = searchParamsStore.value;

    const { limit = "20", search = "", category1 = "", category2 = "", sort = "price_asc" } = params ?? {};

    //TODO: limit을 수정할 때 기존 store 데이터를 초기화시키는 로직 필요(?)

    const filterValue = productStore.value.data?.[0]?.filters;

    if (
      filterValue &&
      (productStore.value.data[0].filters.category1 !== category1 ||
        productStore.value.data[0].filters.category2 !== category2 ||
        productStore.value.data[0].filters.search !== search ||
        productStore.value.data[0].filters.sort !== sort)
    ) {
      productStore.setValue((prev) => ({
        ...prev,
        data: [],
        limit: parseInt(params?.limit || "20", 10),
        isLoading: true,
      }));
    } else {
      productStore.setValue((prev) => ({
        ...prev,
        limit: parseInt(params?.limit || "20", 10),
        isLoading: true,
      }));
    }

    const response = await getProducts();

    productStore.setValue((prev) => {
      if (
        prev.data.some(
          (v) => v.pagination.page === response.pagination.page && v.pagination.limit === response.pagination.limit,
        )
      ) {
        return {
          ...prev,
          isLoading: false,
        };
      }

      return {
        ...prev,
        isLoading: false,

        data: prev.data.concat([response]),
      };
    });
  });
};
