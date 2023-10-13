import Head from "next/head";
import { HomeNavBar } from "@/app/_components/Header/navbar";
import { HomeFooter } from "@/app/_components/Footer/footer";
import { fetchData } from "@/app/_apis/fetchproductfromkeyword";
import Card from "@/app/_components/Card";

interface IParams {
  categoryid: string;
}

export default async function CategoryPage({ params }: { params: IParams }) {
  const listings = await fetchData(params);
  const { categoryid } = params;
  return (
    <>
      <Head>
        <title>Category Page</title>
      </Head>
      <body>
        <HomeNavBar />
        <main className="flex p-2">
          <div className="flex flex-col gap-2 p-1 max-w-[100vw] ">
            <div className="w-[100%] min-h-[20vh] flex items-center justify-start py-2 px-4">
              <div className="bg-neutral-300 shadow-md rounded-md flex items-center text-center p-4 border-1 font-bold">
                {decodeURIComponent(categoryid)}
              </div>
            </div>
            <div className="w-[100%] h-auto p-2 mt-2 shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {listings.map((listing, key) => (
                <Card
                  image_src={listing.mediumImageUrl.replace(
                    "_ex=128x128",
                    "_ex=1024x1024"
                  )}
                  card_title={listing.productName}
                  card_price={listing.minPrice}
                  product_id={listing.productId}
                  key={key}
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
