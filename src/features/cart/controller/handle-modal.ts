import { searchParamsStore } from "../../common/search-params/search-params-store";
import { CartModal } from "../components/CartModal";
import { cartStore } from "../model/cartStore";

let cartModalInstance: CartModal | null = null;

const cartInstance = new CartModal();

cartStore.subscribe(() => {
  cartInstance.update();
});

export function handleModal() {
  const cart = searchParamsStore.value?.cart === "true";

  if (cart) {
    cartInstance.mount(document.body);
  } else {
    if (cartModalInstance) {
      cartModalInstance.unmount();
    }
  }
}
