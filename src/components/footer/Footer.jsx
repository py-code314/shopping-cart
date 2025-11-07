import styles from '../footer/Footer.module.css'
import facebookIcon from '../../assets/images/facebook.svg'
import instagramIcon from '../../assets/images/instagram.svg'
import mastodonIcon from '../../assets/images/mastodon.svg'
import pinterestIcon from '../../assets/images/pinterest.svg'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentWrapper}>
        <div className={styles.footerPrimary}>
          <div className={`${styles.about} ${styles.card}`}>
            <h2 className={styles.subtitle}>Anchor</h2>
            <p className={styles.description}>
              The full-scale department store experience, now just a click away.
              Shop top brands in fashion, home, and beauty.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.subheading}>Customer Service</h3>
            <ul className={styles.footerListPrimary}>
              <li>
                <Link className={`${styles.footerLink} ${styles.inactive}`}>
                  FAQ and Help
                </Link>
              </li>
              <li>
                <Link className={`${styles.footerLink} ${styles.inactive}`}>
                  Order Lookup
                </Link>
              </li>
              <li>
                <Link className={`${styles.footerLink} ${styles.inactive}`}>
                  Returns
                </Link>
              </li>
              <li>
                <Link className={`${styles.footerLink} ${styles.inactive}`}>
                  Shipping & Delivery
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3 className={styles.subheading}>Stores & Services</h3>
            <ul className={styles.footerListPrimary}>
              <li className={styles.footerListItem}>
                <Link className={`${styles.footerLink} ${styles.inactive}`}>
                  Curbside & In Store Pickup
                </Link>
              </li>
              <li className={styles.footerListItem}>
                <Link className={`${styles.footerLink} ${styles.inactive}`}>
                  Locations & Hours
                </Link>
              </li>
              <li className={styles.footerListItem}>
                <Link className={`${styles.footerLink} ${styles.inactive}`}>
                  Store Events
                </Link>
              </li>
              <li className={styles.footerListItem}>
                <Link className={`${styles.footerLink} ${styles.inactive}`}>
                  Gift Registry
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3 className={styles.subheading}>Follow Us</h3>
            <ul className={styles.footerListPrimary}>
              <li className={styles.footerListItem}>
                <a
                  className={styles.footerLink}
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={facebookIcon} alt="" />
                  <p>Facebook</p>
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a
                  className={styles.footerLink}
                  href="https://mastodon.social/explore"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={mastodonIcon} alt="" />
                  <p>Mastodon</p>
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a
                  className={styles.footerLink}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={instagramIcon} alt="" />
                  <p>Instagram</p>
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a
                  className={styles.footerLink}
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={pinterestIcon} alt="" />
                  <p>Pinterest</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerSecondary}>
          <p className={styles.copyright}>Copyright &copy; 2025</p>
          <ul className={styles.footerListSecondary}>
            <li className={styles.footerListItem}>
              <Link className={`${styles.footerLink} ${styles.inactive}`}>
                Terms & Conditions
              </Link>
            </li>
            <li className={styles.footerListItem}>
              <Link className={`${styles.footerLink} ${styles.inactive}`}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
