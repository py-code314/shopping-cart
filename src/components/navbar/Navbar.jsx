import styles from './Navbar.module.css'
import { NavLink} from 'react-router'

/* Displays Navbar */
const NavBar = () => {
  return (
    <nav className={styles.navbar}>

      {/* Navigation links */}
      <ul className={styles.navbarList}>

        {/* Home link */}
        <li className={styles.navItem}>
          <NavLink
            to={`/home`}
            className={({ isActive }) =>
              `${styles.navbarLink} ${isActive ? styles.active : ''}`
            }>
            Home
          </NavLink>
        </li>

        {/* Shop link */}
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
