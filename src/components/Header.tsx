import { Link } from "react-router-dom"
export const Header = () => {
    return (
        <header className="fixed w-full">
            <nav className="nav w-full py-6 shadow-md bg-white">
                <div className="container flex justify-between align-center">
                    <div id="Logo" className="">
                        <Link to="/"><h1 className="font-bold outline-none text-gray-600 md:text-2xl">Shopping Cart</h1></Link>
                    </div>
                    <div className="hidden sm:block sm:space-x-3 md:space-x-5 text-gray-400 hover:text-gray-500">
                        <Link to="/about">About</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/checkout">Checkout</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}