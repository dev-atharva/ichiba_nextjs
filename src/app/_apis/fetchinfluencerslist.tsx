import { Influencer_list } from "@/app/_types/influencer_list_info";
import axios from "axios";

export async function getlistofinfluencers(): Promise<Influencer_list[]> {
  try {
    const response = await axios.get<Influencer_list[]>(
      "https://web-production-4593.up.railway.app/products/influencers/"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
