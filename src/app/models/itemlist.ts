export interface Itemlist {
    id: string,
    categoryId: string,
    routeName: string,
    items: Items[]
}

export interface Items {
    id: string,
    name: string,
    imageUrl: string,
    price: number
}
