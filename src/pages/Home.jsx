import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { useCart } from '../context/CartContext'
import { API_URL } from '../api'

function Home() {
  const { addToCart } = useCart()
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log('Error fetching products:', err))
  }, [])

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Future-Ready Fashion</h1>
          <p>Discover premium products curated just for you</p>
          <button className="hero-btn">Shop Now</button>
        </div>
      </div>

      <h2 className="home-title">Our Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p className="product-price">Rs. {product.price}</p>
            <p className="product-rating">⭐ {product.rating}</p>
            <button
              className="btn-cart"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <Link to={`/product/${product._id}`} className="btn-detail">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home