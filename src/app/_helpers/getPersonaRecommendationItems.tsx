import { fetchTopSelling } from "../_apis/fetchTopSelling";

//return top selling by using rankingAPI filterd by genraID
export const getPersonaRecommendationItems = (genras: { genraID: number, genraName: string }[]) => {
    const personaRecommendationItems: ReccomendedItemInfo[] = []
    //get all persona items information by use mapping and roop.
    //Temporarily showing example, replace this code.

    genras.map(genra => {
        personaRecommendationItems.push(fetchTopSelling(genra.genraID))
    })

    return (
        personaRecommendationItems
    );
}