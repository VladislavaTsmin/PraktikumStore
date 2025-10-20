import s from "./index.module.css";

export default function ProductCard ({image, title, price}) {

    return (
        <div className={s.card}>
            <img src={image} alt={title} />
            <p>{title}</p>
            <p>{price}</p>
            <button>Buy</button>
        </div>
    )
}