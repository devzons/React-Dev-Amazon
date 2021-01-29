import React from 'react'
import { useStateValue } from '../context/StateProvider'
import './Product.scss'

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue()

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }

  return (
    <div className='product'>
      <div className='product__info'>
        <div className='product__title'>{title}</div>
        <div className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <img className='product__star' src='https://img.icons8.com/officexs/72/filled-star.png' alt='' />
            ))}
        </div>
      </div>
      <div className='product__image'>
        <img src={image} alt='' />
      </div>
      <div className='product__addtocart'>
        <button onClick={addToBasket}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product
