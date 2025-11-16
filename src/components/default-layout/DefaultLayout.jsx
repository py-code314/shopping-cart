import styles from './DefaultLayout.module.css'
import Header from '../header/Header'
import { Outlet, useOutletContext } from 'react-router-dom'

/* Display Header with background color */
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
