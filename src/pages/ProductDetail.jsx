import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import products from '../data/Product'
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="detail-container">
        <h1>Product not found!</h1>
      </div>
    )
  }

  return (
    <div className="detail-container">
      <div className="detail-card">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-info">
          <p className="detail-category">{product.category}</p>
          <h1 className="detail-name">{product.name}</h1>
          <p className="detail-rating">⭐ {product.rating} / 5</p>
          <p className="detail-price">Rs. {product.price}</p>
          <p className="detail-description">{product.description}</p>
          <p className="detail-stock">
            {product.stock > 0 
              ? `✅ In Stock (${product.stock} available)` 
              : '❌ Out of Stock'}
          </p>
          <button
            className="detail-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail