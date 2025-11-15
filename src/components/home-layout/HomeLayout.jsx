import { Outlet, useOutletContext } from 'react-router-dom'
import Header from '../header/Header'
import styles from './HomeLayout.module.css'

const HomeLayout = () => {
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
