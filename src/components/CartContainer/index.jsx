import { useState, useEffect } from "react";
import CartProduct from "../CartProduct";
import s from "./index.module.css";
import ConfirmWindow from "../ConfirmWindow";

export default function CartContainer({ cartProducts, setCartProducts, setLastPurchase, isVisible, setIsVisible }) {

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalPriceConfirm, setTotalPriceConfirm] = useState(0);
    const [confirmMessage, setConfirmMessage] = useState(false);

    useEffect(() => {
        const total = cartProducts.reduce(
            (sum, product) => sum + product.price * product.productCount,
            0
        );
        setTotalPrice(total.toFixed(2));
    }, [cartProducts]);

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

    const confirmPurchase = () => {
        if (cartProducts.length === 0) return;
        const total = cartProducts.reduce(
            (acc, item) => acc + item.price * item.productCount, 0).toFixed(2);
        setLastPurchase(cartProducts);
        setConfirmMessage(true);
        setCartProducts([]);
        setTotalPriceConfirm(total);
    };

    return (
        <div className={s.cartWrapper}>
            <div className={s.cartTitle}>Your Product Cart</div>

            <div className={s.cartAndButtonsWrapper}>
                <div className={s.cartAndTotal}>
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
                    <div className={s.totalPrice}>Total: ${totalPrice}</div>
                </div>

                <div className={s.cartButtons}>
                    <button className={s.confirm} onClick={confirmPurchase}>
                        Confirm Purchase
                    </button>

                    <button className={s.clear} onClick={() => setCartProducts([])}>
                        Clear Cart
                    </button>

                    <button className={s.lastCart} onClick={() => setIsVisible(!isVisible)}>
                        Last Purchase
                    </button>
                </div>
            </div>

            <ConfirmWindow
                totalPrice={totalPriceConfirm}
                visible={confirmMessage}
                onClose={() => setConfirmMessage(false)}
            />
        </div>
    );
}