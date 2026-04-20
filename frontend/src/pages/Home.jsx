import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to E-Commerce Shopping Cart</h1>
        <p>Find the best products at great prices</p>
        <button onClick={() => navigate('/shop')}>Start Shopping</button>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Easy Shopping</h3>
          <p>Browse and search through thousands of products</p>
        </div>
        <div className="feature-card">
          <h3>Secure Checkout</h3>
          <p>Multiple payment methods for your convenience</p>
        </div>
        <div className="feature-card">
          <h3>Fast Delivery</h3>
          <p>Quick and reliable shipping to your doorstep</p>
        </div>
        <div className="feature-card">
          <h3>24/7 Support</h3>
          <p>Customer support available round the clock</p>
        </div>
      </section>
    </div>
  )
}

export default Home
