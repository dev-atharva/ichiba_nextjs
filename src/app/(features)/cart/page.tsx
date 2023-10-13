"use client";
import Card from "@/app/_components/Card";
import { useCartStore } from "@/app/hooks/cartfunction";
import Head from "next/head";
import { useState, useEffect } from "react";

interface Product {
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

const Cart = () => {
  const cartstore = useCartStore();
  const [productDetails, setProductDetails] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProductDetails() {
      const details: Product[] = [];
      for (const productId of cartstore.cart) {
        try {
          const response = await fetch(
            `https://app.rakuten.co.jp/services/api/Product/Search/20170426?format=json&productId=${productId}&applicationId=1018947431031079367`
          );
          const data = await response.json();

          details.push(data.Products[0].Product);

          console.log(details);
        } catch (error) {
          console.error(
            `Error fetching product data for product ID ${productId}:`,
            error
          );
        }
      }

      setProductDetails(details);
      setIsLoading(false);
    }

    if (cartstore.cart.length !== 0) {
      fetchProductDetails();
    }
  }, [cartstore.cart]);

  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <body>
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="max-w-screen-lg mx-auto ">
            <div className="flex flex-col gap-6 ">
              <div className="max-w-[100vw] min-h-[10vh]  flex items-center justify-center">
                <span className="text-3xl font-bold ">Cart Items</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2">
                {isLoading ? (
                  <p>Loading...</p>
                ) : productDetails.length === 0 ? (
                  <p>Cart is empty</p>
                ) : (
                  productDetails.map((productInfo, key) => (
                    <Card
                      card_title={productInfo.productName}
                      card_price={productInfo.averagePrice}
                      image_src={productInfo.mediumImageUrl.replace(
                        "_ex=128x128",
                        "_ex=1024x1024"
                      )}
                      key={productInfo.productId}
                      product_id={productInfo.productId}
                      category_name={productInfo.genreName}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Cart;
