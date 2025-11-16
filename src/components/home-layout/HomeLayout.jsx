import styles from './HomeLayout.module.css'
import Header from '../header/Header'
import { Outlet, useOutletContext } from 'react-router-dom'

/* Displays Header with background wrapper */
const HomeLayout = () => {
  // Access cartItems and setCartItems
  const [cartItems, setCartItems] = useOutletContext()

  return (
    <>
      <div className={styles.backgroundWrapper}>
        <Header isHome={true} cartItems={cartItems} />
      </div>

      <Outlet context={[cartItems, setCartItems]} />
    </>
  )
}

export default HomeLayout
