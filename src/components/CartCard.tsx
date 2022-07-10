import { useEffect, useState } from "react"
import { PlusIcon, MinusIcon } from "@heroicons/react/outline"
import { useCartContext } from "../hooks/context/useCartContext"

type CartCardProps = {
    id: number
    price?: number
    quantity: number
}

type Items = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
}

export const CartCard = ({ id, quantity }: CartCardProps) => {
    const [item, setItem] = useState({} as Items)
    const [error, setError] = useState(null)
    const { decreaseItemQuantity, increaseItemQuantity } = useCartContext()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
            .catch(err => setError(err))
    }, [])

    return (
        <div key={item.id} className="container lg:px-10">
            <div className="card-stack text-black bg-white">
                <div className="flex justify-between items-start">
                    <div className="card-img py-2">
                        <img className="w-24 sm:w-44 object-contain" src={item.image} alt="Product image" />
                    </div>
                    <div className="w-56 sm:w-96 md:w-max text-gray-500">
                        <div className="card-body title line-clamp-2">{item.title}</div>
                        <span className="text-xs block mb-1 pl-5">${ item.price * quantity }</span>
                        <div className="grid grid-flow-col grid-cols-2 gap-1">
                            <button onClick={() => decreaseItemQuantity(id)} className="btn-outline ml-auto"><MinusIcon className="h-5" /></button>
                            <span className="inline-block text-center text-lg font-semibold"><i className="text-xs">Quantity</i><br />{ quantity }</span>
                            <button onClick={() => increaseItemQuantity(id, item.price)} className="btn-outline ml-auto"><PlusIcon className="h-5" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}