import s from "./index.module.css";

export default function ProductCard ({id, image, title, price, category, addToCart}) {

    return (
        <div className={s.card}>
            <img src={image} alt={title} />
            <p>{title}</p>
            <p>${price}</p>
            <button onClick={() => {
                addToCart({id, image, title, price, category})
            }} className={s.button}>Buy</button>
        </div>
    )
}