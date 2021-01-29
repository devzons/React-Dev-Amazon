import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Link } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider'
import { auth } from '../firebase/firebase.config'
import './Header.scss'

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue()

  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <div className='header'>
      <Link to='/'>
        <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' className='header__logo' />
      </Link>
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionTop'>Hello {!user ? 'Guest' : user.email}</span>
            <span className='header__optionBottom'>{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to='/orders'>
          <div className='header__option'>
            <span className='header__optionTop'>Returns</span>
            <span className='header__optionBottom'>&amp; Orders</span>
          </div>
        </Link>
        <div className='header__option'>
          <span className='header__optionTop'>Your</span>
          <span className='header__optionBottom'>Prime</span>
        </div>
        <Link to='/checkout' className='header__cartIcon'>
          <div className='header__optionBasket'>
            <ShoppingCartIcon />
            <span className='header__optionBottom header__basketCount'>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
