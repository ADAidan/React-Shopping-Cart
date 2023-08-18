import { createContext } from 'react';

export const ShoppingContext = createContext({
    products: [],
    cartItems: [],
    cartCount: 0,
    addToCart: () => {},
});