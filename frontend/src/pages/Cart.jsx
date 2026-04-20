import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartStart, getCartSuccess, removeFromCart } from '../redux/cartSlice'
import { cartAPI, orderAPI } from '../services/api'
import '../styles/Cart.css'

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state) => state.auth)
  const { items, totalPrice, loading } = useSelector((state) => state.cart)

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }

    fetchCart()
  }, [isAuthenticated, navigate])

  const fetchCart = async () => {
    dispatch(getCartStart())
    try {
      const response = await cartAPI.getCart()
      dispatch(
        getCartSuccess({
          items: response.data.cart.items,
          totalPrice: response.data.cart.totalPrice,
          totalItems: response.data.cart.totalItems,
        })
      )
    } catch (error) {
      console.error('Failed to fetch cart:', error)
    }
  }

  const handleRemoveItem = async (itemId) => {
    try {
      await cartAPI.removeItem(itemId)
      dispatch(removeFromCart(itemId))
      fetchCart()
    } catch (error) {
      console.error('Failed to remove item:', error)
    }
  }

  const handleCheckout = async () => {
    try {
      const orderData = {
        shippingAddress: {
          street: 'Your Street',
          city: 'Your City',
          state: 'Your State',
          postalCode: '12345',
          country: 'Your Country',
        },
        paymentMethod: 'credit_card',
      }

      const response = await orderAPI.create(orderData)
      alert('Order placed successfully!')
      navigate('/orders')
    } catch (error) {
      alert(error.response?.data?.message || 'Checkout failed')
    }
  }

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div key={item._id} className="cart-item">
                <div className="item-info">
                  <h3>{item.product?.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button onClick={() => handleRemoveItem(item._id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button onClick={handleCheckout} disabled={loading}>
              {loading ? 'Processing...' : 'Proceed to Checkout'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
