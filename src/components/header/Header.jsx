import styles from './Header.module.css'
import { Link, NavLink } from 'react-router'
import shoppingBag from '../../assets/images/shopping-bag.svg'

//TODO: Add disabled to inactive links, also add href="#" tabindex="-1" aria-disabled="true"

const Header = ({ onClick, onHomeClick }) => {
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
              }
              onClick={onHomeClick}>
              Home
            </NavLink>
          </li>
          <li className={styles.navbar__item}>
            <NavLink
              to={`shop`}
              className={({ isActive }) =>
                `${styles.navbarLink} ${isActive ? styles.active : ''}`
              }
              onClick={onClick}>
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
      <Link to={`cart`} className={styles.cartLink} onClick={onClick}>
        <img src={shoppingBag} alt="" width={25} height={25} />
      </Link>
    </header>
  )
}

export default Header
