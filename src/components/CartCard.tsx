import { useEffect, useState } from "react"

type CartCardProps = {
    id: number
    title?: string
    price?: number
    description?: string
    category?: string
    image?: string
    quantity: number
}
export const CartCard = ({ id }: CartCardProps) => {
    const [item, setItem] = useState({} as CartCardProps)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
            .catch(err => setError(err))
    }, [])

    return (
        <div key={item.id} className="container">
            <div className="card-stack text-black bg-white">
                <div className="sm:flex justify-between items-center">
                    <div className="card-img">
                        <img src={item.image} width={200} alt="Product image" />
                    </div>
                    <div className="sm:max-w-sm">
                        <div className="card-body title">{ item.title }</div>
                        <div className="card-body line-clamp-2">{ item.description }</div>
                    </div>
                </div>
            </div>
        </div>
    )
}