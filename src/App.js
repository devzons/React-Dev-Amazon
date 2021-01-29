import React, { useEffect } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Checkout from './pages/Checkout'
import Payment from './pages/Payment'
import Orders from './pages/Orders'
import { Switch, Route } from 'react-router-dom'
import { auth } from './firebase/firebase.config'
import { useStateValue } from './context/StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import './App.css'

const promise = loadStripe('pk_test_cIdxHadnM1Zl2aPhVrcrVrqn')

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/checkout'>
          <Header />
          <Checkout />
        </Route>
        <Route path='/payment'>
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path='/orders'>
          <Header />
          <Orders />
        </Route>
      </Switch>
    </div>
  )
}

export default App
