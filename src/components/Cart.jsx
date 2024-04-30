import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

export default function Cart() {
    const cartCtx = useContext(CartContext);

    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
        return totalPrice + item.quantity * item.price;
    }, 0);

  return (
    <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map((item) => (
                <li key={item.id}>
                    {item.name} - {item.quantity}
                </li>
            ))}
        </ul>
        <p className="cart-total">Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnly>
                Close
            </Button>
            <Button>Go to Checkout</Button>
        </p>
    </Modal>
  )
}