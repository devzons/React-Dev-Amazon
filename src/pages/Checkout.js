import React from 'react'
import Subtotal from '../components/Subtotal'
import './Checkout.scss'
import { useStateValue } from '../context/StateProvider'
import CheckoutProduct from '../components/CheckoutProduct'

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue()

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='amazon ad' className='checkout__ad' />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className='checkout__title'>Shopping Cart</h2>

          {basket.map((item) => (
            <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
          ))}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
