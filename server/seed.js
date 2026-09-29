import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from './models/product.js'

dotenv.config()

const products = [
  { name: "Wireless Headphones", price: 2999, category: "Electronics", image: "/headphones-pexel.jpg", description: "High quality wireless headphones with noise cancellation.", rating: 4.5, stock: 10 },
  { name: "Men's Casual Shirt", price: 1499, category: "Clothing", image: "/shirts-pexels.jpg", description: "Comfortable cotton casual shirt for everyday wear.", rating: 4.2, stock: 25 },
  { name: "Smart Watch", price: 4999, category: "Electronics", image: "/smartwatch-pexels.jpg", description: "Feature-rich smartwatch with health tracking.", rating: 4.7, stock: 8 },
  { name: "Women's Handbag", price: 2499, category: "Accessories", image: "/pexel-handbag.jpg", description: "Stylish leather handbag for women.", rating: 4.3, stock: 15 },
  { name: "Running Shoes", price: 3499, category: "Footwear", image: "/shoes-pexels.jpg", description: "Lightweight and comfortable running shoes.", rating: 4.6, stock: 20 },
  { name: "Leather Backpack", price: 1999, category: "Accessories", image: "/pexels-backpack.jpg", description: "Spacious backpack with laptop compartment.", rating: 4.4, stock: 12 },
  { name: "Bluetooth Speaker", price: 1799, category: "Electronics", image: "/pexel-speaker.jpg", description: "Portable bluetooth speaker with deep bass.", rating: 4.1, stock: 18 },
  { name: "Floral Print Dress", price: 2199, category: "Clothing", image: "/women-dress.jpg", description: "Elegant floral dress for special occasions.", rating: 4.8, stock: 14 },
  { name: "Sunglasses", price: 1299, category: "Accessories", image: "/pexels-sunglasses.jpg", description: "Stylish UV protection sunglasses.", rating: 4.3, stock: 20 },
  { name: "Perfume", price: 3999, category: "Beauty", image: "/pexels-perfume.jpg", description: "Luxury long-lasting fragrance.", rating: 4.7, stock: 15 },
  { name: "Leather Wallet", price: 899, category: "Accessories", image: "/pexels-wallet.jpg", description: "Slim genuine leather wallet.", rating: 4.4, stock: 30 },
  { name: "Laptop", price: 89999, category: "Electronics", image: "/pexels-laptop.jpg", description: "High performance laptop for work and gaming.", rating: 4.8, stock: 5 },
  { name: "Women's Scarf", price: 799, category: "Clothing", image: "/pexels-scarf.jpg", description: "Soft and elegant women's scarf.", rating: 4.2, stock: 25 },
  { name: "Mobile Phone", price: 49999, category: "Electronics", image: "/pexels-phone.jpg", description: "Latest smartphone with amazing camera.", rating: 4.6, stock: 10 },
  { name: "Wrist Watch", price: 5999, category: "Accessories", image: "/pexels-watch.jpg", description: "Classic analog wrist watch for men.", rating: 4.5, stock: 12 },
  { name: "Face Serum", price: 1599, category: "Beauty", image: "/pexels-cream.jpg", description: "Premium moisturizing face cream.", rating: 4.3, stock: 20 }
]

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB Connected!')

    await Product.deleteMany({})
    console.log('Old products removed')

    await Product.insertMany(products)
    console.log('16 products added successfully! 🎉')

    process.exit()
  } catch (err) {
    console.log('Error:', err)
    process.exit(1)
  }
}

seedDB()