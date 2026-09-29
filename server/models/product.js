import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  rating: { type: Number, default: 0 },
  category: { type: String },
  description: { type: String },
  stock: { type: Number, default: 0 }
})

const Product = mongoose.model('Product', productSchema)

export default Product