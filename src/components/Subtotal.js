import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider'
import { getBasketTotal } from '../redux/reducer'
import './Subtotal.scss'

const Subtotal = () => {
  const history = useHistory()
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contians a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button onClick={(e) => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
