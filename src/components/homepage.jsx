import { useContext } from 'react';
import ProductListing from './product-listing';
import { ShoppingContext } from '../context/shopping-context';

const HomePage = () => {
    const { products } = useContext(ShoppingContext);

    return (
        <div className='products-container'>
            {products.map((product) => (
                <ProductListing key={product.id} product={product}/>
            ))}
        </div>
    );
}

export default HomePage;