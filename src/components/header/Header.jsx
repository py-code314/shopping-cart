import styles from './Header.module.css'
import { Link } from 'react-router'
import shoppingBag from '../../assets/images/shopping-bag.svg'
import NavBar from '../navbar/navbar'
import Hero from '../hero/Hero'

//TODO: Add disabled to inactive links, also add href="#" tabindex="-1" aria-disabled="true"

const Header = ({ isHome, cartItems }) => {
  let totalItems = 0
  if (cartItems) {
    totalItems = cartItems.reduce(
      (total, product) => total + product.quantity,
      0
    )
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Anchor</h1>
        <NavBar />
        <Link to={`cart`} className={styles.cartLink}>
          <img src={shoppingBag} alt="" width={25} height={25} />
          <p className={styles.noOfItems}>{totalItems}</p>
        </Link>
      </div>
      {isHome && <Hero />}
    </header>
  )
}

export default Header
