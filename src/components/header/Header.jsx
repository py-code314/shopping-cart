import styles from './Header.module.css'
import { Link, NavLink } from 'react-router'
import shoppingBag from '../../assets/images/shopping-bag.svg'

//TODO: Add disabled to inactive links, also add href="#" tabindex="-1" aria-disabled="true"

const Header = ({ cartItems }) => {
  // const [cartItems, setCartItems] = useOutletContext()
  let totalItems = 0
  if (cartItems) {
    totalItems = cartItems.reduce(
      (total, product) => total + product.quantity,
      0
    )
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Anchor</h1>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={styles.navbar__item}>
            <NavLink
              to={`home`}
              className={({ isActive }) =>
                `${styles.navbarLink} ${isActive ? styles.active : ''}`
              }>
              Home
            </NavLink>
          </li>
          <li className={styles.navbar__item}>
            <NavLink
              to={`shop`}
              className={({ isActive }) =>
                `${styles.navbarLink} ${isActive ? styles.active : ''}`
              }>
              Shop
            </NavLink>
          </li>
          <li className={styles.navbar__item}>
            <Link className={`${styles.navbarLink} ${styles.inactive}`}>
              About
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link className={`${styles.navbarLink} ${styles.inactive}`}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Link to={`cart`} className={styles.cartLink}>
        <img src={shoppingBag} alt="" width={25} height={25} />
        <p className={styles.noOfItems}>{totalItems}</p>
      </Link>
    </header>
  )
}

export default Header
