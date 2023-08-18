import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingContext } from '../context/shopping-context.js'
import cartSvg from '../assets/cart.svg'

export default function NavBar() {
    const { cartCount } = useContext(ShoppingContext)
    console.log(cartCount)
    return (
        <nav className='navbar'>
            <h1 className='title'>Shopping</h1>
            <div className='cart-link-container'>
                <Link to='cart' className='cart-link'>
                    <h4>Cart</h4>
                    <img src={cartSvg} alt='cart' />
                    <h2 className='cart-count'>{cartCount}</h2>
                </Link>
            </div>
        </nav>
    )
}