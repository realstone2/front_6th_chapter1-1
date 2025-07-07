import { QueryDataType } from "../../../query/query-data-type";
import { createStore } from "../../../store/createStore";

export type Product = {
  title: string;
  link: string;
  image: string;
  lprice: string;
  hprice: string;
  mallName: string;
  productId: string;
  productType: string;
  brand: string;
  maker: string;
  category1: string;
  category2: string;
  category3: string;
  category4: string;
};

//TODO: 단건 쿼리와 엮을 필요는 없을지 고민 포인트
export const productStore = createStore<QueryDataType<Product>>({
  isLoading: false,
  data: [],
  error: null,
  page: 1,
  limit: 20,
});
