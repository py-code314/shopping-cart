import styles from './Navbar.module.css'
import { NavLink, Link } from 'react-router';

const NavBar = () => {
  return (
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
  )
}
 
export default NavBar;