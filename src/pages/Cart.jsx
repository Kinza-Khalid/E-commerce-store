import { useCart } from '../context/CartContext'
import './Cart.css'

function Cart() {
  const { cartItems, removeFromCart, cartTotal } = useCart()
  if (cartItems.length === 0) {
    return <h1>Your cart is empty 🛒</h1>
  }
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Rs. {item.price} x {item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h2>Total: Rs. {cartTotal}</h2>
    </div>
  )
}

export default Cart  