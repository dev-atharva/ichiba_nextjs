import Head from "next/head";
import { HomeNavBar } from "@/app/_components/Header/navbar";
import { HomeFooter } from "@/app/_components/Footer/footer";
import { getPersonaRecommendationItems } from "../_helpers/getPersonaRecommendationItems";
import { allPersonaRecommendationGenraList } from "../_constants/recommended_genra_list";

import Hero from "../_components/Hero";
import Products from "../_components/Trending_Product_listing/Products";
import Newlife from "../_components/NewLife_Recommendations";
import Influencer from "../_components/Influencers";
import Persona from "../_components/Persona";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <body className=" w-[117%] sm:w-[100vw] ">
        <HomeNavBar />
        <Hero />
        <Persona />
        <Products />
        <Newlife />
        <Influencer />

        <HomeFooter />
      </body>
    </>
  );
}
