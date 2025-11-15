import Header from '../header/Header'
import { Outlet, useOutletContext } from 'react-router-dom'
import styles from './DefaultLayout.module.css'

const DefaultLayout = () => {
  const [cartItems, setCartItems] = useOutletContext()
  return (
    <>
      <div className={styles.backgroundColor}>
        <Header isHome={false} cartItems={cartItems} />
      </div>

      <Outlet context={[cartItems, setCartItems]} />
    </>
  )
}

export default DefaultLayout
