export interface IBook {
    id: number,
    title: string,
    author: string,
    genre: string,
    description: string,
    price: number,
    availability: boolean,
    stock: number,
    discount: number,
    rentalAvailability: boolean
}