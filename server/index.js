import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

app.use('/api/products', productRoutes)

// MongoDB Connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.log('MongoDB Error:', err))

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Luxe & Co. Server is running!' })
})

// Server start
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

import authRoutes from './routes/authRoutes.js'

app.use('/api/auth', authRoutes)

import orderRoutes from './routes/orderroutes.js'


app.use('/api/orders', orderRoutes)