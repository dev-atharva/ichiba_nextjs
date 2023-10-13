import { RecommendedItemCard } from "@/app/_components/Elements/recommend_itemcard";
import { list } from "postcss";

export const RecommendedItemCardList = ({ personaRecommendationItems }: { personaRecommendationItems: ReccomendedItemInfo[] }): React.ReactNode => {
    return (
        < div className="flex space-x-6" >
            {
                personaRecommendationItems.map((personaRecommendationItem: ReccomendedItemInfo, index: number) => {
                    return (
                        <RecommendedItemCard key={index} personaRecommendationItem={personaRecommendationItem} />
                        // <Todo key={todo.id} content={todo.content} />
                    );
                })
            }
        </div>
    );
}