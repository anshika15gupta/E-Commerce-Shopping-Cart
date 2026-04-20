import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchProductsStart, fetchProductsSuccess } from '../redux/productSlice'
import { addToCartStart, addToCartSuccess, addToCartError } from '../redux/cartSlice'
import { productAPI, cartAPI } from '../services/api'
import ProductCard from '../components/ProductCard'
import '../styles/Shop.css'

const Shop = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state) => state.auth)
  const { products, loading } = useSelector((state) => state.products)
  const [filters, setFilters] = useState({ search: '', category: '' })

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }

    fetchProducts()
  }, [isAuthenticated, navigate])

  const fetchProducts = async () => {
    dispatch(fetchProductsStart())
    try {
      const response = await productAPI.getAll(filters)
      dispatch(fetchProductsSuccess(response.data.products))
    } catch (error) {
      console.error('Failed to fetch products:', error)
    }
  }

  const handleAddToCart = async (productId, quantity = 1) => {
    dispatch(addToCartStart())
    try {
      const response = await cartAPI.addToCart({ productId, quantity })
      dispatch(
        addToCartSuccess({
          items: response.data.cart.items,
          totalPrice: response.data.cart.totalPrice,
          totalItems: response.data.cart.totalItems,
        })
      )
      alert('Product added to cart!')
    } catch (error) {
      dispatch(addToCartError(error.response?.data?.message || 'Failed to add to cart'))
    }
  }

  return (
    <div className="shop-container">
      <h1>Shop</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
        <button onClick={fetchProducts}>Search</button>
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onAddToCart={() => handleAddToCart(product._id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Shop
