import { Header } from "../components/Header"
import { Banner } from "../components/Banner"
import { Card } from "../components/Card"
import { useProductContext } from "../hooks/context/useProductContext"

export const HomePage = () => {
    const { products, error } = useProductContext()
    if (error) {
        console.log("An Error Occurred: ", error)
        alert("Error fetching products from server, check your internet connection.")
        return null
    }
    return (
        <>
            <Header />
            <Banner />
            <main className="h-full bg-gray-50">
                <div className="container">
                    <div id="card-content" className="sm:grid grid-flow-col sm:grid-rows-6 gap-4 space-y-5">
                        {
                            products.length === 0
                            ? <p>Please wait, fetching Products...</p>
                            : products.map(product => <Card {...product} />)
                        }
                    </div>
                </div>
            </main>
        </>
    )
}