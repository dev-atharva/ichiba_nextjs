interface Product {
  averagePrice: number;
  genreName: string;
  mediumImageUrl: string;
  productId: string;
  productName: string;
}

export interface InfluencerApiResponse {
  products: Product[];
  name: string;
  image_url: string;
  description: string;
}
