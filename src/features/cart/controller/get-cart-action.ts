import { handleToastMessage } from "../../common/controller/handle-toast-message";
import { productStore } from "../../product/model/product-store";
import { cartStore } from "../model/cartStore";

/**
 * getCartAction
 **/
export function getCartAction() {
  return {
    addToCart: (productId: string) => {
      const product = productStore.value.data.flatMap((v) => v.products).find((p) => p.productId === productId);
      if (!product) return;

      cartStore.setValue((prev) => ({
        ...prev,
        productList: [...prev.productList, product],
      }));

      handleToastMessage({
        text: "장바구니에 추가되었습니다",
        type: "success",
      });
    },
  };
}
