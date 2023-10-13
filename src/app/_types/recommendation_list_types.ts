interface Product {
  productName: string;
  brandName: string;
  genreName: string;
  averagePrice: number;
  maxPrice: number;
  minPrice: number;
  productUrlPC: string;
  mediumImageUrl: string;
  productCaption: string;
  productId: string;
}

export interface RecommendationApiResponse {
  recommendation_list: string;
  products: Product[];
  for_whom: string;
}
