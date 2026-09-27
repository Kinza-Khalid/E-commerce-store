import './Orders.css'

function Orders() {
  const fakeOrders = [
    {
      id: 1,
      date: "2026-09-26",
      status: "Delivered",
      total: 7998,
      items: ["Wireless Headphones", "Men's Casual Shirt"]
    },
    {
      id: 2,
      date: "2026-09-27",
      status: "Processing",
      total: 4999,
      items: ["Smart Watch"]
    },
    {
      id: 3,
      date: "2026-09-27",
      status: "Shipped",
      total: 5498,
      items: ["Running Shoes", "Laptop Backpack"]
    }
  ]

  return (
    <div className="orders-container">
      <h1 className="orders-title">My Orders</h1>
      {fakeOrders.map(order => (
        <div key={order.id} className="order-card">
          <div className="order-header">
            <h3>Order #{order.id}</h3>
            <span className={`order-status ${order.status.toLowerCase()}`}>
              {order.status}
            </span>
          </div>
          <div className="order-body">
            <p>📅 Date: {order.date}</p>
            <p>🛍️ Items: {order.items.join(', ')}</p>
            <p>💰 Total: Rs. {order.total}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Orders