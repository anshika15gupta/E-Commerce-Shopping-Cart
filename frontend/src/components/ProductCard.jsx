import React from 'react'
import '../styles/ProductCard.css'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="description">{product.description.substring(0, 50)}...</p>
      <div className="price-section">
        <span className="price">${product.price}</span>
        {product.salePrice && (
          <span className="sale-price">${product.salePrice}</span>
        )}
      </div>
      <p className="stock">Stock: {product.stock}</p>
      <button onClick={onAddToCart} disabled={product.stock === 0}>
        {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  )
}

export default ProductCard
