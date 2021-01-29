import React from 'react'
import { useStateValue } from '../context/StateProvider'
import './CheckoutProduct.scss'

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt='' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small> <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <img className='product__star' src='https://img.icons8.com/officexs/72/filled-star.png' alt='' />
            ))}
        </div>
        {!hideButton && <button onClick={removeFromBasket}>Remove from Cart</button>}
      </div>
    </div>
  )
}

export default CheckoutProduct
