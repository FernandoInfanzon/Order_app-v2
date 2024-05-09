import {useContext} from 'react'
import Modal from "./UI/Modal"
import CartContext from "../store/cart-context"
import { currencyFormatter } from '../util/formatting'

export default function Checkout() {
  const cartCtx = useContext(CartContext)

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);
    return (
    <Modal>
      <h2>Checkout</h2>
      <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
    </Modal>
  )
}
