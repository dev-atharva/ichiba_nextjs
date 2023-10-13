import { Product } from "@/app/_types/popular_item_types";
import axios from "axios";
interface IParams {
  categoryid?: string;
}

export const fetchData = async (params: IParams) => {
  try {
    const { categoryid } = params;
    const response = await axios.get(
      `https://app.rakuten.co.jp/services/api/Product/Search/20170426?format=json&keyword=${categoryid}&applicationId=1018947431031079367`
    );
    const productData: Product[] = response.data.Products.map(
      (product: any) => ({
        productName: product.Product.productName,
        mediumImageUrl: product.Product.mediumImageUrl,
        productId: product.Product.productId,
        minPrice: parseInt(product.Product.minPrice, 10),
      })
    );
    return productData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
