import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/navbar.jsx'
import { ShoppingContext } from './context/shopping-context'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState([])

  const API = 'https://fakestoreapi.com/products'

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProducts(data)
      })
      .catch((err) => console.log(err))
  }, [API])

  const addToCart = (product, count) => {
    console.log('adding to cart')
    setCartCount(prev => prev + count);
    const newItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: count,
    }
    console.log(newItem)
    if (!cartItems.length) {
        setCartItems(prev => {
            return [...prev, newItem];
        });
        return;
    }
    for (let item of cartItems) {
        if (item.id === newItem.id) {
            item.quantity += newItem.quantity;
            console.log(cartItems)
            return;
        }
    };
    setCartItems(prev => {
        return [...prev, newItem];
    });
  };

  const contextValue = {
    products,
    cartCount,
    setCartCount,
    cartItems,
    addToCart,
  }

  return (
    <ShoppingContext.Provider value={contextValue}>
      <NavBar/>
      <Outlet/>
    </ShoppingContext.Provider>
  )
}

export default App