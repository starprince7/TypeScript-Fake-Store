import { Link } from "react-router-dom"
import { ShoppingBagIcon } from "@heroicons/react/outline"
import { useCartContext } from "../hooks/context/useCartContext"

export const Header = () => {
    const { cartItems } = useCartContext()
    console.log("The cart number: ", cartItems)
    return (
        <header className="fixed w-full">
            <nav className="nav w-full py-6 shadow-md bg-white">
                <div className="container flex justify-between align-center">
                    <div id="Logo" className="">
                        <Link to="/"><h1 className="font-bold outline-none text-gray-600 md:text-2xl">Shopping Cart</h1></Link>
                    </div>
                    <div className="hidden sm:block sm:space-x-3 md:space-x-5 text-gray-400">
                        <div className="link"><Link to="/about">About</Link></div>
                        <div className="link"><Link to="/cart">Cart</Link></div>
                        <div className="link"><Link to="/checkout">Checkout</Link></div>
                        <Link to="/cart">
                            <div className="cart-icon inline-block relative link translate-y-2">
                                <ShoppingBagIcon className="h-7" />
                                {
                                    cartItems.length > 0 &&
                                    <span className="badge absolute bottom-0 right-0">{ cartItems.length }</span>
                                }
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}