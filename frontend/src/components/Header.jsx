import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/authSlice'
import '../styles/Header.css'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuthenticated, user } = useSelector((state) => state.auth)
  const { totalItems } = useSelector((state) => state.cart)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1 onClick={() => navigate('/')}>🛒 ShopCart</h1>
        </div>

        <nav className="nav">
          <a href="/">Home</a>
          {isAuthenticated && <a href="/shop">Shop</a>}
        </nav>

        <div className="actions">
          {isAuthenticated ? (
            <>
              <a href="/cart" className="cart-link">
                🛒 Cart ({totalItems})
              </a>
              <a href="/orders">Orders</a>
              <span className="user-info">{user?.firstName}</span>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <a href="/login">Login</a>
              <a href="/register">Register</a>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
