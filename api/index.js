import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import productRoutes from '../server/routes/productRoutes.js'
import authRoutes from '../server/routes/authRoutes.js'
import orderRoutes from '../server/routes/orderroutes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// Reuse mongoose connection in serverless environment
let isConnected = false
const connectDB = async () => {
  if (isConnected || mongoose.connection.readyState >= 1) {
    isConnected = true
    return
  }
  try {
    await mongoose.connect(process.env.MONGO_URI)
    isConnected = true
    console.log('MongoDB Connected in Vercel function')
  } catch (err) {
    console.error('MongoDB Serverless Connection Error:', err)
  }
}

app.use(async (req, res, next) => {
  await connectDB()
  next()
})

app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/orders', orderRoutes)

app.get('/api', (req, res) => {
  res.json({ message: 'Luxe & Co. API is running!' })
})

export default app
