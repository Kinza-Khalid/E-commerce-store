import { useState, useEffect } from 'react'
import { API_URL } from '../api'
import './Orders.css'

function Orders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      setError('Please login to see your orders.')
      setLoading(false)
      return
    }

    fetch(`${API_URL}/api/orders`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        setOrders(data)
        setLoading(false)
      })
      .catch(err => {
        console.log('Error fetching orders:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="orders-container"><h1>Loading...</h1></div>
  }

  if (error) {
    return <div className="orders-container"><h1>{error}</h1></div>
  }

  if (orders.length === 0) {
    return (
      <div className="orders-container">
        <h1 className="orders-title">My Orders</h1>
        <p>You haven't placed any orders yet.</p>
      </div>
    )
  }

  return (
    <div className="orders-container">
      <h1 className="orders-title">My Orders</h1>
      {orders.map(order => (
        <div key={order._id} className="order-card">
          <div className="order-header">
            <h3>Order #{order._id.slice(-6)}</h3>
            <span className={`order-status ${order.status.toLowerCase()}`}>
              {order.status}
            </span>
          </div>
          <div className="order-body">
            <p>📅 Date: {new Date(order.createdAt).toLocaleDateString()}</p>
            <p>🛍️ Items: {order.items.map(i => i.name).join(', ')}</p>
            <p>💰 Total: Rs. {order.totalPrice}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Orders