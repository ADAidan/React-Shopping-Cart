import { useState } from 'react';
import { 
    createBrowserRouter, 
    RouterProvider
} from 'react-router-dom';
import App from './App'
import ErrorPage from './ErrorPage'
import ShoppingCart from './components/shopping-cart.jsx'
import HomePage from './components/homepage.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'

const Router = () => {
    const [isLoading, setIsLoading] = useState(false)

    const router = createBrowserRouter([
        {
          path: '/',
          element: <App/>,
          children: [
            { index: true, element: <HomePage/> },
            { path: '/cart', element: <ShoppingCart/> },
          ],
          errorElement: <ErrorPage />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default Router;