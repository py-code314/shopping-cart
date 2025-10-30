import styles from './Header.module.css'
import { NavLink } from 'react-router';
import shoppingBagIcon from '../../assets/images/shopping-bag-icon.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}><img className='logo' src={shoppingBagIcon} alt="" width={30} height={30} /></div>
      <h1 className={styles.title}>Anchor</h1>
      <nav className={styles.navbar}>
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__item}>
            <NavLink
              to={`home`}
              className={({ isActive }) =>
                `${styles.navbar__link} ${isActive ? styles.active : ''}`
              }>
              Home
            </NavLink>
          </li>
          <li className={styles.navbar__item}>
            <NavLink
              to={`shop`}
              className={({ isActive }) =>
                `${styles.navbar__link} ${isActive ? styles.active : ''}`
              }>
              Shop
            </NavLink>
          </li>
          <li className={styles.navbar__item}>
            <NavLink
              to={`cart`}
              className={({ isActive }) =>
                `${styles.navbar__link} ${isActive ? styles.active : ''}`
              }>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
 
export default Header;