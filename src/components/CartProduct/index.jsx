import s from "./index.module.css";

export default function CartProduct({ id, image, title, price, category, productCount, counterDecrease, counterIncrease, deleteFromCart }) {





    return (
        <div className={s.cartProductWrapper}>
            <img src={image} alt={title} className={s.cartImage} />

            <div className={s.topRow}>
                <p className={s.title}>
                    {title}
                </p>
                <p className={s.category}>
                    {category}
                </p>
                <div className={s.bottomRow}>
                    <p className={s.price}>${(price * productCount).toFixed(2)}</p>
                    <p className={s.counter}>{productCount}</p>
                </div>

            </div>
            <div className={s.buttonsWrapper}>
                <div className={s.increaments}>
                    <button onClick={counterIncrease} disabled={productCount >= 99}>+</button>
                    <button onClick={counterDecrease} disabled={productCount <= 1}>-</button>
                </div>
                <button onClick={deleteFromCart} className={s.delete}>D</button>
            </div>
        </div>
    )
}