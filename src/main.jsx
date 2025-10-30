import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router'
import './index.css'
import App from './App.jsx'
import Home from './components/home/Home.jsx'
import Shop from './components/shop/Shop.jsx'
import Cart from './components/cart/Cart.jsx'
import ErrorPage from './components/error/ErrorPage.jsx'

// TODO: Move router into a separate file

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'home',
        element: <Home/>
      },
      {
        path: 'shop',
        element: <Shop/>
      },
      {
        path: 'cart',
        element: <Cart/>
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
