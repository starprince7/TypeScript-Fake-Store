import { createContext, useContext, useEffect, useState } from "react"

type ProductsProps = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    quantity: number
}[]

type ErrorProps = {} | null

type ProductsContextProps = {
    products: ProductsProps
    error: ErrorProps
}

type ProductContextProviderProps = {
    children: React.ReactNode
}

const ProductContext = createContext({} as ProductsContextProps)

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductContextProvider = ({ children }: ProductContextProviderProps) => {
    const [products, setProducts] = useState<ProductsProps>([])
    const [error, setError] = useState(null)

        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => setProducts(data))
                .catch(err => setError(err))
        }, [])

    return (
        <ProductContext.Provider value={{products, error}}>{children}</ProductContext.Provider>
    )
}