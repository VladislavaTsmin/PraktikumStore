import { useState, useEffect } from "react";
import s from "./index.module.css";

export default function LastPurchase({ lastPurchase, visible }) {

    const [lastTotal, setLastTotal] = useState(0);

    useEffect(() => {
        const total = lastPurchase.reduce(
            (sum, product) => sum + product.price * product.productCount,
            0
        );
        setLastTotal(total.toFixed(2));
    }, [lastPurchase]);




    return (
        <div
            style={{ display: visible ? "block" : "none" }}
            className={s.wrapper}
        >
            <div
                className={`${s.lastPurchaseWrapper} ${lastPurchase.length === 0 ? s.empty : ""
                    }`}
            >
                {lastPurchase.length === 0
                    ? <p className={s.emptyText}>No previous purchases</p>
                    : lastPurchase.map(product => (
                        <div key={product.id} className={s.divP}>
                            <p className={s.text}>{product.title}</p>
                            <p className={s.price}>${product.price * product.productCount}</p>
                            <p className={s.counter}>{product.productCount}</p>
                        </div>
                    ))}
            </div>
            <div className={s.total}>
                <p>Your Last-Total: ${lastTotal}</p>
            </div>
        </div>

    );
}


