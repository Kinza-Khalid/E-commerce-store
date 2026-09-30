import { useCart } from '../context/CartContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Checkout.css'

function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart()
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [ordered, setOrdered] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleOrder = async (e) => {
    e.preventDefault()
    setError('')

    const token = localStorage.getItem('token')
    if (!token) {
      setError('Please login first to place an order.')
      navigate('/login')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          items: cartItems.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image
          })),
          totalPrice: cartTotal,
          name,
          phone,
          address
        })
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || 'Failed to place order')
        setLoading(false)
        return
      }

      setOrdered(true)
      clearCart()
    } catch (err) {
      setError('Something went wrong. Try again.')
      setLoading(false)
    }
  }

  if (ordered) {
    return (
      <div className="checkout-container">
        <div className="order-success">
          <h1>🎉 Order Placed!</h1>
          <p>Thank you for shopping at Luxe & Co.</p>
          <p>Your order will be delivered to: <strong>{address}</strong></p>
        </div>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout-container">
        <h1>Your cart is empty!</h1>
      </div>
    )
  }

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      {error && <p className="auth-error">{error}</p>}
      <div className="checkout-layout">

        <div className="order-summary">
          <h2>Order Summary</h2>
          {cartItems.map(item => (
            <div key={item.id} className="summary-item">
              <img src={item.image} alt={item.name} />
              <div>
                <p className="summary-name">{item.name}</p>
                <p className="summary-price">
                  Rs. {item.price} x {item.quantity}
                </p>
              </div>
              <p className="summary-total">
                Rs. {item.price * item.quantity}
              </p>
            </div>
          ))}
          <div className="summary-grand-total">
            <h3>Total: Rs. {cartTotal}</h3>
          </div>
        </div>

        <div className="delivery-form">
          <h2>Delivery Details</h2>
          <form onSubmit={handleOrder}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Delivery Address</label>
              <textarea
                placeholder="Enter your full address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                rows={4}
              />
            </div>
            <button type="submit" className="place-order-btn" disabled={loading}>
              {loading ? 'Placing Order...' : 'Place Order'}
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Checkout