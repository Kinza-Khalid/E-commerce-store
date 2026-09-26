import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  
  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id)
      if (exists) {
        

        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  
  const clearCart = () => {
    setCartItems([])
  }

  
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0
  )

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}