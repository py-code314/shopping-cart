import App from '../App'
import ErrorPage from '../components/error/ErrorPage'
import HomeLayout from '../components/home-layout/HomeLayout'
import Home from '../components/home/Home'
import DefaultLayout from '../components/default-layout/DefaultLayout'
import Shop from '../components/shop/Shop'
import Cart from '../components/cart/Cart'

/* Array of routes */
const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomeLayout />,
        children: [{ path: '/', element: <Home /> }],
      },
      {
        path: '/home',
        element: <HomeLayout />,
        children: [{ path: '/home', element: <Home /> }],
      },
      {
        path: '/shop',
        element: <DefaultLayout />,
        children: [{ path: '/shop', element: <Shop /> }],
      },
      {
        path: '/cart',
        element: <DefaultLayout />,
        children: [{ path: '/cart', element: <Cart /> }],
      },
    ],
  },
]

export default routes
