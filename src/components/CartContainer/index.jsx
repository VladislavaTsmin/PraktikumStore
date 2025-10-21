import CartProduct from "../CartProduct";
import s from "./index.module.css";

export default function CartContainer({ cartProducts, setCartProducts }) {

    const deleteFromCart = (id) => {
        setCartProducts(prev => prev.filter(item => item.id !== id));
    };

    const counterIncrease = (id) => {
        setCartProducts(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, productCount: item.productCount + 1 }
                    : item
            )
        );
    };

    const counterDecrease = (id) => {
        setCartProducts(prev =>
            prev.map(item =>
                item.id === id && item.productCount > 1
                    ? { ...item, productCount: item.productCount - 1 }
                    : item
            )
        );
    };

    return (
        <div className={s.cartWrapper}>
            <div className={s.cartTitle}>
                Your Product Cart
            </div>
            <div className={s.cartAndButtonsWrapper}>
                <div className={s.cart}>
                    {cartProducts.map(product => (
                        <CartProduct
                            key={product.id}
                            {...product}
                            counterIncrease={() => counterIncrease(product.id)}
                            counterDecrease={() => counterDecrease(product.id)}
                            deleteFromCart={() => deleteFromCart(product.id)}
                        />
                    ))}
                </div>
                <div className={s.cartButtons}>
                    <button>Confirm Purchase</button>
                    <button>Clear Cart</button>
                    <button>Last Purchase</button>
                </div>
            </div>
        </div>

    );
}