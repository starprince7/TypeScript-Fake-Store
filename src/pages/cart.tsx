import CurrencyFormat from "react-currency-format"
import { Header } from "../components/Header"
import { CartCard } from "../components/CartCard"
import { useCartContext } from "../hooks/context/useCartContext"
import { Link } from "react-router-dom"

export const Cart = () => {
    const { cart } = useCartContext()
    const totalCartPrice = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0)
    
    return (
        <>
            <Header />
            <main className="h-full pt-24 bg-gray-50">
                <div className="container py-5">
                    <div id="card-content" className="space-y-5">
                        <h1 className="title">Cart items</h1>
                        {
                            cart.length === 0
                            ? <p className="flex justify-center items-center">Your Cart is Empty <span className="text-blue-600 ml-1 underline"><Link to="/">goto products</Link></span></p>
                            : cart.map(cartItem => <CartCard {...cartItem} />)
                        }
                        {
                            cart.length > 0 && 
                            (
                                <div className="container flex items-center justify-between mt-5 mb-14 text-gray-700">
                                    <div className="font-semibold text-lg">Total:</div>
                                    <p className="text-lg font-bold">
                                        <CurrencyFormat
                                            prefix="$"
                                            decimalScale={2}
                                            displayType="text"
                                            value={totalCartPrice}
                                            thousandSeparator={true}
                                            renderText={(value: string) => <>{ value }</>}
                                        />
                                    </p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </main>
        </>
    )
}