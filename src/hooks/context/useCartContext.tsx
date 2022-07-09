import { createContext, useContext, useState } from "react"

type CartContextProviderProps = {
    children: React.ReactNode
}

type CartItemProps = {
    id?: number
    title?: string
    price?: number
    description?: string
    category?: string
    image?: string
    quantity?: number
}

type CartContextFuncProps = {
    getItemQuantity: (id: number) => number;
    increaseItemQuantity: (id: number) => void;
    decreaseItemQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
}

type CartContextItemProps = { cartItems: CartItemProps } &  CartContextFuncProps

const CartContext = createContext({} as CartContextItemProps)

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [cartItems, setCartItems] = useState<CartContextItemProps[]>([])

    // Functions to provide to Provider value prop

    // Get Item quantity
    const getItemQuantity = (id: number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    // Add to cart or Increase Item quantity
    const increaseItemQuantity = (id: number) => {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) === null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) return { ...item, quantity: item.quantity + 1 }
                    else return item
                })
            }
        })
    }

    // Decrease cart Item quantity
    const decreaseItemQuantity = (id: number) => {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id === id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) return { ...item, quantity: item.quantity - 1 }
                    else return item
                })
            }
        })
    }

    // Remove from cart
    const removeFromCart = (id: number) => {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    const context_values = {
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
        cartItems
    }

    return (
        <CartContext.Provider value={context_values}> {children}</CartContext.Provider>
    )
}