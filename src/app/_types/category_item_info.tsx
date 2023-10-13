//This is infomation of category items.
//used in Individual Product Page and Category Page.

//fetched from item Search API using itemCode.

interface CategoryItemInfo {
    itemCode: string;
    imgUrl: string;
    ProductName: string;
    itemPrice: number;
    reviewAverage: number;
    reviewCount: number;
}