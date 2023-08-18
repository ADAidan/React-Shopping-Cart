import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingContext } from '../context/shopping-context.js'
import '../App.css'

export default function ShoppingCart() {
    const [cartTotal, setCartTotal] = useState(0)
    const { cartItems } = useContext(ShoppingContext)
    console.log(cartItems)

    useEffect(() => {
        console.log('ShoppingCart component mounted')
        if (cartItems.length === 0) {
            console.log('cart is empty')
            return
        }
        console.log(cartItems)
    }, [])

    useEffect(() => {
        console.log('cartItems updated')
        if (cartItems.length === 0) {
            return
        }
        console.log(cartItems)
        let total = 0;
        for (let item of cartItems) {
            total += item.price * item.quantity;
        }
        console.log(total)
        setCartTotal(total);
        console.log(cartTotal)
    }, [cartItems])

    return (
        <div>
            <h2>Shopping Cart</h2>
            <Link to='/'>Back Home</Link>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <div className='cart-item' key={item.id}>
                        <h4 className='item-title'>{item.title}</h4>
                        <h4>Quantity {item.quantity}</h4>
                        <h4 className='item-price'>${item.price * item.quantity}</h4>
                    </div>
                ))}
                <h4 className='cart-total'>Cart Total: ${cartTotal}</h4>
            </div>
        </div>
    )
}