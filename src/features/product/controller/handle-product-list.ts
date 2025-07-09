import { getProducts } from "../../../api/productApi";
import { searchParamsStore } from "../../common/search-params/search-params-store";

import { productStore } from "../model/product-store";

export const handleProductList = () => {
  return searchParamsStore.subscribe(async () => {
    const params = searchParamsStore.value;

    //TODO: limit을 수정할 때 기존 store 데이터를 초기화시키는 로직 필요(?)
    productStore.setValue((prev) => ({
      ...prev,
      limit: parseInt(params?.limit || "20", 10),
      isLoading: true,
    }));

    const response = await getProducts();

    productStore.setValue((prev) => {
      //이미 해당 page 데이터가 있는 경우
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
