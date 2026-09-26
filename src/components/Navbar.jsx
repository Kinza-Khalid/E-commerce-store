import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">Luxe & Co.</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/orders">Orders</Link>
      </div>
    </nav>
  )
} 