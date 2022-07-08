import { createContext, useContext, useEffect, useState } from "react"

type ProductsContextProps = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    quantity: number
}[]

type ProductContextProviderProps = {
    children: React.ReactNode
}

const ProductContext = createContext([] as ProductsContextProps)

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductContextProvider = ({ children }: ProductContextProviderProps) => {
    const [products, setProducts] = useState<ProductsContextProps>([])

        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => setProducts(data))
        }, [])

    return (
        <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
    )
}