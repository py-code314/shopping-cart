import styles from './Navbar.module.css'
import { NavLink, Link } from 'react-router'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navItem}>
          <NavLink
            to={`/home`}
            className={({ isActive }) =>
              `${styles.navbarLink} ${isActive ? styles.active : ''}`
            }>
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to={`/shop`}
            className={({ isActive }) =>
              `${styles.navbarLink} ${isActive ? styles.active : ''}`
            }>
            Shop
          </NavLink>
        </li>
        {/* Not using NavLink because it's showing an alert on Accessibility check */}
        <li className={styles.navItem}>About</li>
        <li className={styles.navItem}>Contact</li>
      </ul>
    </nav>
  )
}

export default NavBar
