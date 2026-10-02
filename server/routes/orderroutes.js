import express from 'express'
import Order from '../models/Order.js'
import protect from '../middleware/authmiddleware.js'

const router = express.Router()

// CREATE order (protected)
router.post('/', protect, async (req, res) => {
  try {
    const { items, totalPrice, name, phone, address } = req.body

    const order = new Order({
      user: req.userId,
      items,
      totalPrice,
      name,
      phone,
      address
    })

    const savedOrder = await order.save()
    res.status(201).json(savedOrder)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// GET logged-in user's orders (protected)
router.get('/', protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId }).sort({ createdAt: -1 })
    res.json(orders)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router