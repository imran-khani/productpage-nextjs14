
type Products = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

export const fetchProducts = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data: Products[] = await res.json()
        return data
    } catch (error: any) {
        throw new Error("Error fetching data", error)
    }
}

