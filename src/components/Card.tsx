import { useCartContext } from "../hooks/context/useCartContext"

type CardProps = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity: number;
}

export const Card: React.FC<CardProps> = ({ id, title, price, description, category, image, quantity }) => {
    const {
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart } = useCartContext()
    return (
        <div className="card" key={id}>
            <div className="card-img">
                <img className="object-cover mx-auto" src={image} alt="product" width={200} />
            </div>
            <div className="card-body">
                <div className="flex justify-between align-center">
                    <div className="title line-clamp-1">{ title }</div>
                </div>
                <p className="price-details my-2">${ price }</p>
                <p className="price-details mb-2 line-clamp-2 text-sm">${ description }</p>
                <button className="btn">+ Add To Cart</button>
            </div>
        </div>
    )
}