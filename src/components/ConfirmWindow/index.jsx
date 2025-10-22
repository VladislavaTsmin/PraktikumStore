import s from "./index.module.css";

export default function ConfirmWindow({ totalPrice, visible, onClose }) {
    if (!visible) {
        return null;
    }

    return (
        <div className={s.windowWrapper}>
            <div className={s.confirmWindow}>
                <p>Thanks for shopping!</p>
                <p>Total: ${totalPrice}</p>
                <button onClick={onClose}>OK</button>
            </div>
        </div>
    );
}