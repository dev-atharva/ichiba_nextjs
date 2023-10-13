import { Particular_product } from "@/app/_types/particular_product";
import axios, { AxiosResponse } from "axios";

interface IParams {
  productid: string;
}
export interface Product {
  genreName: string;
  productName: string;
  productCaption: string;
  mediumImageUrl: string;
  averagePrice: number;
  itemCount: number;
  reviewAverage: number;
  productUrlPC: string;
  makerName: string;
  productId: string;
}
interface ApiResponse {
  GenreInformation: {
    children: any[];
    current: any[];
    parent: any[];
  };
  Products: {
    Product: {
      genreName: string;
      productName: string;
      productCaption: string;
      mediumImageUrl: string;
      averagePrice: number;
      itemCount: number;
      reviewAverage: number;
      productUrlPC: string;
      makerName: string;
      productId: string;
    };
  }[];
}

export async function fetchProductData(params: IParams): Promise<ApiResponse> {
  try {
    const { productid } = params;
    const response: AxiosResponse<ApiResponse> = await axios.get(
      `https://app.rakuten.co.jp/services/api/Product/Search/20170426?format=json&productId=${productid}&applicationId=1018947431031079367`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
