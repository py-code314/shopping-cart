import { Outlet, useOutletContext } from 'react-router'
import Header from '../header/Header'

const HomeLayout = () => {
  const [cartItems, setCartItems] = useOutletContext()
  return (
    <>
      <div className="backgroundWrapper">
        <Header isHome={true} cartItems={cartItems} />
      </div>

      <Outlet context={[cartItems, setCartItems]} />
    </>
  )
}

export default HomeLayout
