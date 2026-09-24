import products from '../data/Product'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">🛍️ Our Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p className="product-price">Rs. {product.price}</p>
            <p className="product-rating">⭐ {product.rating}</p>
            <button className="btn-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home