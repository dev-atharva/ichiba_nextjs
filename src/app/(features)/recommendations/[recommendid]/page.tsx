import Head from "next/head";
import { HomeNavBar } from "@/app/_components/Header/navbar";
import { HomeFooter } from "@/app/_components/Footer/footer";
import { fetchrecommendationdata } from "@/app/_apis/fetchrecommendlistdata";
import Card from "@/app/_components/Card";

interface IParams {
  recommendid: number;
}

export default async function ProductSamplePage({
  params,
}: {
  params: IParams;
}) {
  const { recommendid } = params;
  const recommendlist_data = await fetchrecommendationdata(recommendid);

  return (
    <>
      <Head>
        <title>Recommendations List</title>
      </Head>
      <body>
        <HomeNavBar />
        <main className="flex p-2">
          <div className="flex flex-col gap-2 p-1 max-w-[100vw] ">
            <div className="w-[100%] min-h-[20vh] flex items-center justify-start py-2 px-4">
              <div className="bg-neutral-300 shadow-md rounded-md flex items-center text-center p-4 border-1 font-bold">
                {recommendlist_data?.for_whom}
              </div>
            </div>
            <div className="w-[98vw] h-auto p-2 mt-2 shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {recommendlist_data?.products.map((recommend_list, id) => (
                <Card
                  card_price={recommend_list.averagePrice}
                  card_title={recommend_list.productName}
                  product_id={recommend_list.productId}
                  image_src={recommend_list.mediumImageUrl.replace(
                    "_ex=128x128",
                    "_ex=1024x1024"
                  )}
                  key={recommend_list.productId}
                  category_name={recommend_list.genreName}
                />
              ))}
            </div>
          </div>
        </main>
        <HomeFooter />
      </body>
    </>
  );
}
