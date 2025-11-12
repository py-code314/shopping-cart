import Header from '../header/Header'
import { Outlet, useOutletContext } from 'react-router'

const DefaultLayout = () => {
  const [cartItems, setCartItems] = useOutletContext()
  return (
    <>
      <div className="backgroundColor">
        <Header isHome={false} cartItems={cartItems} />
      </div>

      <Outlet context={[cartItems, setCartItems]} />
    </>
  )
}

export default DefaultLayout
