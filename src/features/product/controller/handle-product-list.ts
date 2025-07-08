import { getProducts } from "../../../api/productApi";
import { searchParamsStore } from "../../common/search-params/search-params-store";

import { productStore } from "../store/product-store";

export const handleProductList = () => {
  searchParamsStore.subscribe(async () => {
    const params = searchParamsStore.value;

    if (params?.limit !== productStore.value.limit?.toString()) {
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

    productStore.setValue((prev) => ({
      ...prev,
      isLoading: false,

      data: prev.data.concat([
        {
          items: response.products,
          page: response.pagination.page,
        },
      ]),
    }));
  });
};
