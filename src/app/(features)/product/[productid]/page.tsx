import Head from "next/head";
import { HomeNavBar } from "@/app/_components/Header/navbar";
import { HomeFooter } from "@/app/_components/Footer/footer";
import Image from "next/image";
import { fetchProductData } from "@/app/_apis/fetchparticularproduct";

import Listingbuy from "@/app/_components/Listing/Listingbuy";

interface IParams {
  productid: string;
}

export default async function ProductSamplePage({
  params,
}: {
  params: IParams;
}) {
  const formatter = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  });
  const product_data = await fetchProductData(params);
  const product = product_data.Products[0].Product;
  const genreName = product.genreName;
  const productName = product.productName;
  const productCaption = product.productCaption;
  const mediumImageUrl = product.mediumImageUrl;
  const newimageurl = mediumImageUrl.replace("_ex=128x128", "_ex=1024x1024");
  const averagePrice = product.averagePrice;
  const itemCount = product.itemCount;
  const reviewAverage = product.reviewAverage;
  const productUrlPC = product.productUrlPC;
  const makerName = product.makerName;
  const productId = product.productId;
  return (
    <>
      <Head>
        <title>Product Page</title>
      </Head>
      <body>
        <HomeNavBar />
        <main className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 ">
          <div className="max-w-screen-lg mx-auto ">
            <div className="flex flex-col gap-6">
              <div className="text-[#444444] font-bold text-3xl p-2">
                {productName}
              </div>
              <div className="w-full h-[50vh] xl:h-[90vh] overflow-hidden rounded-xl relative ">
                <Image src={newimageurl} alt="Product Image" fill />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-10 mt-6 mb-3">
                <div className="col-span-4 flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <div className="text-xl font-bold flex flex-row items-center gap-2">
                      <div>Details</div>
                    </div>
                    <div className="flex flex-row items-center gap-4 font-semibold text-[#444444]">
                      <div>Genre Name: {genreName}</div>
                      <div>Item Count: {itemCount}</div>
                      <div>Review Average: {reviewAverage}</div>
                    </div>
                  </div>
                  <hr />
                  <span className="text-xl font-bold text-red-500">
                    Average Price: {formatter.format(averagePrice)}
                  </span>
                  <hr />
                  <div className="text-lg font-light text-[#444444]">
                    {productCaption}
                  </div>
                </div>
                <div className="order-first mb-10 md:order-last md:col-span-3">
                  <Listingbuy
                    productId={productId}
                    detailurl={productUrlPC}
                    makerName={makerName}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <HomeFooter />
      </body>
    </>
  );
}
