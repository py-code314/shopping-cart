import styles from './Header.module.css'
import Hero from '../hero/Hero'
import NavBar from '../navbar/Navbar'
import shoppingBag from '../../assets/images/shopping-bag.svg'
import { Link } from 'react-router-dom'

/* Displays Header */
const Header = ({ isHome, cartItems }) => {
  let totalItems = 0

  // Calculate total number of items
  if (cartItems) {
    totalItems = cartItems.reduce(
      (total, product) => total + product.quantity,
      0
    )
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {/* Title */}
        <h1 className={styles.title}>Anchor</h1>

        <NavBar />

        {/* Cart icon */}
        <Link
          to={`/cart`}
          className={styles.cartLink}
          aria-label={`View cart items`}>
          <img src={shoppingBag} alt="" width={25} height={25} />
          <p className={styles.noOfItems}>{totalItems}</p>
        </Link>
      </div>

      {/* Hero section */}
      {isHome && <Hero />}
    </header>
  )
}

export default Header
