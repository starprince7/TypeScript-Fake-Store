import { Header } from "../components/Header"
import { CartCard } from "../components/CartCard"
import { useCartContext } from "../hooks/context/useCartContext"

export const Cart = () => {
    const { cartItems } = useCartContext()
    return (
        <>
            <Header />
            <main className="h-screen pt-24 bg-gray-50">
                <div className="container">
                    <div id="card-content" className="space-y-5">
                        <h1 className="title">Cart items</h1>
                        {
                            cartItems.length === 0
                            ? <p className="flex justify-center items-center">Your Cart is Empty</p>
                            : cartItems.map(cartItem => <CartCard {...cartItem} />)
                        }
                    </div>
                </div>
            </main>
        </>
    )
}