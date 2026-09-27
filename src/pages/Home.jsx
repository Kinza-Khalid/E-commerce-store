import products from '../data/Product'
import './Home.css'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

function Home() {
  const { addToCart } = useCart()
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Future-Ready Fashion</h1>
          <p>Discover premium products curated just for you</p>
          <button className="hero-btn">Shop Now</button>
        </div>
      </div>

      {/* Products */}
      <h2 className="home-title">Our Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p className="product-price">Rs. {product.price}</p>
            <p className="product-rating">⭐ {product.rating}</p>
            <div className="card-buttons">
              <button
                className="btn-cart"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <Link to={`/product/${product.id}`}>
                <button className="btn-details">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home