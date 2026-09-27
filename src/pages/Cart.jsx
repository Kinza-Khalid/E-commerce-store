import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import './Cart.css'

function Cart() {
  const { cartItems, removeFromCart, cartTotal } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1>Your Cart is Empty 🛒</h1>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <h1>Your Cart 🛒</h1>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Rs. {item.price} x {item.quantity}</p>
          <button
            className="btn-remove"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="cart-total">
        <h2>Total: Rs. {cartTotal}</h2>
        <Link to="/checkout">
          <button className="btn-checkout">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Cart