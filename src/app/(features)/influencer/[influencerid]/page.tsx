import Head from "next/head";
import { HomeNavBar } from "@/app/_components/Header/navbar";
import { HomeFooter } from "@/app/_components/Footer/footer";
import Image from "next/image";
import Card from "@/app/_components/Card";
import { fetchinfluencerdetails } from "@/app/_apis/fetchinfluencerdetails";

interface IParams {
  influencerid: number;
}

export default async function InfluencerPage({ params }: { params: IParams }) {
  const { influencerid } = params;
  const influencer_data = await fetchinfluencerdetails(influencerid);
  return (
    <>
      <Head>
        <title>Influencer Page</title>
      </Head>
      <body>
        <HomeNavBar />
        <main className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="max-w-screen-lg mx-auto ">
            <div className="flex flex-col gap-6">
              {/* header Content */}
              <div className="flex max-w-[100vw] min-h-[20vh] items-center justify-center gap-2 flex-col p-2">
                <div className="avatar">
                  <div className=" w-36 rounded-full">
                    <Image
                      alt="Influener Avatar"
                      src={influencer_data?.image_url}
                      height={144}
                      width={144}
                    />
                  </div>
                </div>
                <span className="font-bold text-4xl">
                  {influencer_data?.name}
                </span>
              </div>
            </div>
            {/* Body content */}
            <div className="max-w-[100vw] min-h-[60vh] p-2 shadow-md flex flex-col gap-2">
              <span className=" font-semibold text-lg px-2 py-2">
                Description :{" "}
              </span>
              <div className="px-2 font-light max-w-[80%] h-auto">
                {influencer_data?.description}
              </div>
              <span className="font-semibold text-lg px-2 py-2">
                Recommended Products :
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {influencer_data?.products.map((influencer_product, id) => (
                  <Card
                    image_src={influencer_product.mediumImageUrl.replace(
                      "_ex=128x128",
                      "_ex=1024x1024"
                    )}
                    card_price={influencer_product.averagePrice}
                    card_title={influencer_product.productName}
                    product_id={influencer_product.productId}
                    key={influencer_product.productId}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
        <HomeFooter />
      </body>
    </>
  );
}
