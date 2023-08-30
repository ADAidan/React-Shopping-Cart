import React, { useContext, useReducer, useEffect, useRef } from 'react';
import { ShoppingContext } from '../context/shopping-context.js';
import { ProductViewContext } from '../context/product-view-context.js';
import quantityReducer from '../reducers/quantity-reducer.js';
import './product-listing.css';

const ProductListing = ({ product }) => {
    const [state, dispatch] = useReducer(quantityReducer, { count: 1 });
    const { addToCart } = useContext(ShoppingContext);
    const { view } = useContext(ProductViewContext);

    const increment = () => {
        dispatch({ type: 'increment_count' });
    };
    
    const decrement = () => {
        dispatch({ type: 'decrement_count' });
    };

    const handleClick = () => {
        if (state.count === '') {
            dispatch({ type: 'reset_count' });
            return;
        } else {
            addToCart(product, state.count);
            dispatch({ type: 'reset_count' })
            return;
        }
    };

    const handleChange = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '') {
            dispatch({ 
                type: 'set_count', 
                count: ''
            });
        }
        if (re.test(e.target.value)) {
            dispatch({ 
                type: 'set_count', 
                count: parseInt(e.target.value) 
            });
        }
    };

    return (
        <div className={`product-card ${
            view == 'list' ?
            'product-list-view' :
            'product-module-view'
        }`} key={product.id}>
            <div className='img-container'>
                <img className='img' src={product.image} alt={product.title} />
            </div>
            <div className='product-info-container'>
                <h3 className='title'>{product.title}</h3>
                <p className='description'>{product.description}</p>
                <h2>${product.price}</h2>
                <div className='stepper-container'>
                    <button className='decrement-button' onClick={decrement}>-</button>
                    <input type='text' value={state.count} onChange={handleChange}/>
                    <button className='increment-button' onClick={increment}>+</button>
                </div>
                <button className='add-to-cart-button' onClick={handleClick}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductListing;