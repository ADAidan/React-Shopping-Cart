import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/navbar.jsx'
import { ShoppingContext } from './context/shopping-context'
import { ProductViewContext } from './context/product-view-context'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState([])
  const [view, setView] = useState('list');

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

  const shoppingContextValue = {
    products,
    cartCount,
    setCartCount,
    cartItems,
    addToCart,
  }

  const productViewContextValue = {
    view,
    setView,
  }

  return (
    <div className='app-container'>
      <ProductViewContext.Provider value={productViewContextValue}>
        <ShoppingContext.Provider value={shoppingContextValue}>
          <NavBar/>
          <Outlet/>
        </ShoppingContext.Provider>
      </ProductViewContext.Provider>
    </div>
  )
}

export default App