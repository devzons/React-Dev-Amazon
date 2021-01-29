import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider'
import CheckoutProduct from '../components/CheckoutProduct'
import './Payment.scss'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../redux/reducer'
import axios from '../axios'
import { db } from '../firebase/firebase.config'

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue()
  const history = useHistory()

  const stripe = useStripe()
  const elements = useElements()

  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState('')
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState(true)

  useEffect(() => {
    // generate the special strip secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      })
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret()
  }, [basket])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setProcessing(true)

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        })

        setSucceeded(true)
        setError(null)
        setProcessing(false)

        dispatch({
          type: 'EMPTY_BASKET',
        })

        history.replace('/orders')
      })
  }

  const handleChange = (event) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>
        {/* deliver address */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Deliver Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>1234 React St</p>
            <p>Los Angeles, CA 90006</p>
          </div>
        </div>
        {/* review items */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map((item) => (
              <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
            ))}
          </div>
        </div>
        {/* payment method */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>
                      Subtotal ({basket.length} items): {value}
                    </h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
                <div className='cc__snippet'>Test CC: 4242 4242 4242 4242 04/24 242 42424</div>
              </div>
              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
