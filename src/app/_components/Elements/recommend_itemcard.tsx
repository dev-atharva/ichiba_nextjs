import Image from "next/image";
import Link from "next/link";

export const RecommendedItemCard = ({ key, personaRecommendationItem }: { key: number, personaRecommendationItem: ReccomendedItemInfo }): React.ReactNode => {
    return (
        <>
            <div className="relative h-40 w-40 shadow-md hover:shadow-lg">
                <Image
                    alt="image"
                    src="/photo-1606107557195-0e29a4b5b4aa.jpeg"
                    // width={300}
                    // height={150}
                    className=""
                    fill
                ></Image>
                {/* <div className="m-auto">
              <p className="absolute text-white  top-16 left-16">a</p>
            </div> */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-60 p-14 backdrop-blur-[2px]"></div>


                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-medium font-serif">Shoes</p>
                <Link href="/product" className='absolute w-full h-full'>
                </Link>
            </div>
        </>

    );
}