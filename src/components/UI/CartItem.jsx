import React from 'react'
import { currencyFormatter } from '../../util/formatting'

export default function CartItem({name, quantity, price}) {
  return (
    <li className='cart-item'>
        <p>
            {name} - {quantity} x {currencyFormatter.format(price)}
        </p>
        <p className='cart-item-actions'>
            <button>-</button>
            <span>1</span>
            <button>+</button>
        </p>
    </li>
  )
}
