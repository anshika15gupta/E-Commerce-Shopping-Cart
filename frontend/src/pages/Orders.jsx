import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { orderAPI } from '../services/api'
import '../styles/Orders.css'

const Orders = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state) => state.auth)
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }

    fetchOrders()
  }, [isAuthenticated, navigate])

  const fetchOrders = async () => {
    setLoading(true)
    try {
      const response = await orderAPI.getMyOrders()
      setOrders(response.data.orders)
    } catch (error) {
      console.error('Failed to fetch orders:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="orders-container">
      <h1>My Orders</h1>

      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>You have no orders yet</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <h3>Order #{order.orderNumber}</h3>
              <p>Status: <strong>{order.orderStatus}</strong></p>
              <p>Total: ${order.totalAmount.toFixed(2)}</p>
              <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders
