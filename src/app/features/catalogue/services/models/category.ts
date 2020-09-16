export interface Category {

    id: number,
    name: string,
    description?: string,
    category?: Category,
    categories?: Category[],
    image: string
}