import { PlusIcon, MinusIcon } from "@heroicons/react/outline"
import { useCartContext } from "../hooks/context/useCartContext"

type CardProps = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export const Card: React.FC<CardProps> = ({ id, title, price, description, category, image }) => {
    const {
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart } = useCartContext()
    
    // Cart Item Quantities
    const quantity = getItemQuantity(id)
    return (
        <div className="card" key={id}>
            <div className="card-img h-44">
                <img className="object-cover mx-auto" src={image} alt="product" width={200} />
            </div>
            <div className="card-body">
                <div className="flex justify-between align-center">
                    <div className="title line-clamp-1">{ title }</div>
                </div>
                <p className="price-details my-2">${ price }</p>
                <p className="price-details mb-2 line-clamp-2 text-sm">${ description }</p>
                {
                    quantity > 0 ?
                    (
                        <div className="flex justify-between items-center space-x-2">
                            <button onClick={() => decreaseItemQuantity(id)} className="btn-sm"><MinusIcon className="h-5" /></button>
                            <span className="inline-block">{ quantity }</span>
                            <button onClick={() => increaseItemQuantity(id, price)}  className="btn-sm"><PlusIcon className="h-5" /></button>
                        </div>
                    )
                    :
                    <button className="btn" onClick={() => increaseItemQuantity(id, price)}>+ Add To Cart</button>
                }
            </div>
        </div>
    )
}