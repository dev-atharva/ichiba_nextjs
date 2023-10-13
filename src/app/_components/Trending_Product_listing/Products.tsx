import Card from "../Card";
import { fetachpopularitems } from "@/app/_apis/fetchTopSelling";

const Products = async () => {
  const products = await fetachpopularitems();

  return (
    <div className="max-w-[100vw] min-w-[30vh] p-2 m-2 flex flex-col ">
      <div className="p-4 font-bold text-2xl flex items-center ">
        Trending Products
      </div>
      <div
        className="grid 
     grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  "
      >
        {products.map((product) => (
          <Card
            card_title={product.genreName}
            image_src={product.imageUrl.replace("_ex=128x128", "_ex=1024x1024")}
            card_price={
              typeof product.itemPrice === "string"
                ? parseInt(product.itemPrice)
                : product.itemPrice
            }
            review_average={product.reviewAverage}
            key={product.itemCode}
            item_url={product.itemUrl}
          />
        ))}
        {/* <Card
          card_title="Great product"
          card_info="This is a great product"
          image_src="/RAKITEN_LOGO.webp"
          card_price={5000}
        /> */}
      </div>
    </div>
  );
};

export default Products;
